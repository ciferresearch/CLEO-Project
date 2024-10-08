// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.18;


contract Registry{
address public owner;

constructor(){
    owner=msg.sender; // owner is the adminstrator 
}

//declaring identity structures and mappings for three types of users . each have their own functions to register
enum typeofuser{owner,requestor,publisher}
struct ownerId{string name;uint age;string gender; string cancertype;}
struct requestorId{string orgname; string purpose; string reqtype;}
struct publisherId{string orgname; string orgaddress; string testtype; string turnaroundtime;}
mapping (address=>ownerId) ownerIdmap;
mapping (address=>requestorId) requestorIdmap;
mapping (address=>publisherId) publisherIdmap;

event typeofidentity(address indexed _user, string _type);

function RegisterOwner(string memory _name, uint _age, string memory _gender, string memory _cancertype) public{
    ownerIdmap[msg.sender]=ownerId(_name,_age,_gender,_cancertype);
     emit typeofidentity(msg.sender, "owner");
}
function RegisterRequestor(string memory _orgname, string memory _purpose, string memory _reqtype) public{
    requestorIdmap[msg.sender]=requestorId(_orgname, _purpose,_reqtype);
      emit typeofidentity(msg.sender, "requestor");
}
function RegisterPublisher(string memory _orgname, string memory _orgaddress, string memory _testtype, string memory _turnaroundtime) public{
    publisherIdmap[msg.sender]=publisherId(_orgname, _orgaddress,_testtype,_turnaroundtime);
      emit typeofidentity(msg.sender, "publisher");
}

function getIdowner(address _address) public view returns (ownerId memory) {
    return ownerIdmap[_address];
}

function getIdrequestor(address _address) public view returns (requestorId memory) {
    return requestorIdmap[_address];
}

function getIdpublisher(address _address) public view returns (publisherId memory) {
    return publisherIdmap[_address];
}

struct hashStruct{address publisheraddress; uint256 time; string CID; string filename; string _fileFormat; string _genomeBuild; string  _genomeCoverage;}
bytes32 hash;
mapping (address=>mapping (bytes32=>hashStruct)) public hashMapping;


event depositEvent(address indexed _owner, address _publisher, bytes32 indexed _hash, uint256 _time, string _CID, string _filename, string _fileFormat, string _genomeBuild, string _genomeCoveragestring, bool _bool, string _publishername);
event removalEvent(address indexed _owner, bytes32 indexed _hash);


function addFile(bytes32 _hash, address _address, string memory _CID, string memory _filename, string memory _fileFormat, string memory _genomeBuild, string memory _genomeCoverage) public {
    hashMapping[_address][_hash] = hashStruct(msg.sender, uint256(block.timestamp), _CID, _filename, _fileFormat, _genomeBuild, _genomeCoverage);
    emit depositEvent(_address, msg.sender, _hash, uint256(block.timestamp), _CID, _filename, _fileFormat,  _genomeBuild, _genomeCoverage,true, publisherIdmap[msg.sender].orgname);


}


function removeFile(bytes32 _hash, address _publisheraddress) public {
    // Check if the file exists in the hash mapping for the specified owner
    require(hashMapping[msg.sender][_hash].publisheraddress == _publisheraddress, "You are not the owner of this file.");
    // Remove the file with the specified hash from the hash mapping for the specified owner
    delete hashMapping[msg.sender][_hash];
    // Emit an event to indicate that the file has been removed
    emit removalEvent(msg.sender, _hash);
}


enum RequestStatus { pending, approved, rejected}
mapping (address=>mapping (address=>mapping(bytes32=>RequestStatus))) public addrequestMapping;

event requestEvent(address indexed _requestor, address indexed _owner, bytes32 indexed _hash, uint256 _time, string _requestorname, string _projecttitle, bytes32 _projecthash);

function addrequest(address _owneraddress, bytes32 _hash, string memory _projecttitle, bytes32 _projecthash) public{
    addrequestMapping[msg.sender][_owneraddress][_hash]=RequestStatus.pending;
    emit requestEvent(msg.sender,_owneraddress,_hash,uint256(block.timestamp), requestorIdmap[msg.sender].orgname, _projecttitle, _projecthash);
}

event statusEvent(address indexed _requestor, address indexed _owner, bytes32 indexed _hash, uint256 _time, RequestStatus _request);


function respondrequest(address _requestor, bytes32 _hash, RequestStatus _request) public 
{
     addrequestMapping[_requestor][msg.sender][_hash]=_request;
     emit statusEvent(_requestor, msg.sender, _hash, uint256(block.timestamp), _request);
}
event projectEvent(address indexed _owner, bytes32 indexed _projecthash, string _projectTitle, string _projectDes, uint256 _startdate, uint256 _enddate);

struct projectStruct{address projectOwner; string projectTitle; string projectDes; string projectPurpose; string projectResults; string projectDuration; string projectEthical; string projectCompliance;}
mapping (address=>mapping(bytes32=>projectStruct)) public projectMapping;

function addProject(bytes32 _projecthash, string memory _projectTitle, string memory _projectDes, string memory _projectPurpose, string memory _projectResults, string memory _projectDuration, string memory _projectEthical, string memory _projectCompliance, uint256 _startdate, uint _enddate)public{
projectMapping[msg.sender][_projecthash]=projectStruct(msg.sender, _projectTitle, _projectDes, _projectPurpose, _projectResults, _projectDuration, _projectEthical,  _projectCompliance);
emit projectEvent(msg.sender,_projecthash,_projectTitle, _projectDes, _startdate,_enddate);
}

        struct Question {
                address questionTo;
                address questionFrom;
                string questionText;
                string answerText;
            }

        mapping(bytes32 => Question[]) public questionMapping;

            function uploadQuestion(bytes32 projectId, address _questionto, string memory questionText) public {
                require(projectId != bytes32(0), "Invalid project ID");
                require(bytes(questionText).length > 0, "Question text cannot be empty");
                Question memory question = Question({
                    questionTo: _questionto,
                    questionFrom: msg.sender,
                    questionText: questionText,
                    answerText: ""
                });

                 questionMapping[projectId].push(question);
    }

      function getQuestions(bytes32 projectId) public view returns (Question[] memory) {
        return questionMapping[projectId];
    }

    function answerQuestion(bytes32 projectId, uint256 questionIndex, string memory answerText) public {
        require(questionIndex < questionMapping[projectId].length, "Invalid question index");

        Question storage question = questionMapping[projectId][questionIndex];
        require(msg.sender == question.questionTo, "Only the intended recipient can answer the question");
        require(bytes(answerText).length > 0, "Answer text cannot be empty");

        question.answerText = answerText;
    }


}
