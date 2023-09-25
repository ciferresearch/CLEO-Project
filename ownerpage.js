
//This function displays all the addresses of the owners that can be selected as a wallet address                
web3.eth.getAccounts().then(function(addresses) {
                                const select = document.getElementById("addressSelect");
                                contract.getPastEvents('typeofidentity', {fromBlock: 0, toBlock: 'latest'}, (error, logs) => {
                                if (!error) {
                                  for (let i = 0; i < logs.length; i++) {
                                    const log = logs[i];
                                    const identity = log.returnValues._user;
                                    const type = log.returnValues._type;

                                    if (type === 'owner') {
                                      for (let j = 0; j < addresses.length; j++) {
                                        const address = addresses[j];
                                      
                                        if (address === identity) {
                                          let option = document.createElement("option");
                                          option.text = address;
                                          option.value = address;
                                          select.appendChild(option);
                                        }
                                      }
                                    }
                                  }  
                                }
                              });
});

// Get the reference to the three tables
const table = document.getElementById("uploaded-files");
const table2 = document.getElementById("request-files");
const table3 = document.getElementById("event-history");

//save the address in addressSelect variable
const addressSelect = document.getElementById("addressSelect");

function updateTables(selectedAddress){
  let userAddressEl=document.getElementById("userAddress")
  userAddressEl.innerHTML = "User ID: <a href='./identitypage.html?id=" + selectedAddress + "' target='_blank'>" + selectedAddress.substring(0,8) + "</a>";

  // Clear the existing rows from the table
      while (table.rows.length > 1) {
        table.deleteRow(1);
      }
      while (table2.rows.length > 1) {
        table2.deleteRow(1);
      }
      while (table3.rows.length > 1) {
        table3.deleteRow(1);
      }
  
  
//check for deposit events and display in first table
  contract.getPastEvents("depositEvent", {  
    filter: { _owner: selectedAddress },
    fromBlock: 0,
    toBlock: "latest"
  }, (error, events) => {
    if (!error) {
      // Iterate through all events
      events.forEach(event => {

        // Get the event data
        const dataID = event.returnValues._hash;
        const publisherID = event.returnValues._publisher;
        const timeFile=event.returnValues._time;
        const publishername=event.returnValues._publishername;
        const CID = event.returnValues._CID;
        const dataType = event.returnValues._datatype;
 
    

        contract.getPastEvents('removalEvent', {
          filter: { _owner: selectedAddress, _hash: dataID },
          fromBlock: 0,
          toBlock: 'latest'
        }, (error, events) => {
          if (error) {
            console.error(error);
            return;
          }

          if (events.length > 0) {
          
        
          } else {
            // Create a new table row
            const row = table.insertRow();
            // Insert cells into the row
            const dataIDCell = row.insertCell();
            const dataTypeCell = row.insertCell();
            const publisherIDCell = row.insertCell();
            const dateFileCell=row.insertCell();
            const timeFileCell=row.insertCell();
            const actionCell = row.insertCell();
            
            // Converting transaction time to human-readable format
            const date = new Date(timeFile * 1000);
            const options = { day: 'numeric', month: 'short', year: 'numeric' };
            const dateString = date.toLocaleDateString('en-US', options);
            const timeString = date.toLocaleTimeString();
          
            // Fill the cells with data
            dataIDCell.innerHTML = "<a href='./datafilepage.html?id=" + dataID + "'>" + dataID.substring(2,7)+ "</a>";
            dataTypeCell.innerHTML = dataType;
            publisherIDCell.innerHTML = "<a href='./identitypage.html?id=" + publisherID + "'>" + publishername + "</a>";
            dateFileCell.innerHTML = dateString;
            timeFileCell.innerHTML = timeString;
          
            // Add a remove button to the last cell
              const removeButton = document.createElement('i');
              removeButton.className = 'fas fa-trash-alt fa-lg';
              removeButton.setAttribute('aria-label', 'Delete');
              removeButton.setAttribute('title', 'Delete');

              removeButton.addEventListener('click', () => {
              if (confirm('Are you sure you want to remove this data file?')) {
                row.remove();

                const hash = dataID;
                const publisherAddress = publisherID;
                contract.methods.removeFile(hash, publisherAddress).send({from: selectedAddress})
                  .on('transactionHash', function(hash){
               
                  })
                  .on('receipt', function(receipt){
                  
                    document.getElementById("transaction-status").innerHTML = "Data file removed succesfully (Transaction ID: " + receipt.transactionHash.substring(2, 7)+")";
            
                    // Remove the row from the table
                    row.remove();
                  })
                  .on('error', function(error){
                    console.error('Error:', error);
                    document.getElementById("transaction-status").innerHTML = "Transaction Failed: " + error;
            
                  });
              }
            });
            actionCell.appendChild(removeButton);

            const spacing = document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'); // Non-breaking space
            actionCell.appendChild(spacing);
            const viewButton = document.createElement('i');
            viewButton.className = 'fas fa-eye fa-lg';
            viewButton.setAttribute('aria-label', 'View');
            viewButton.setAttribute('title', 'View');
            viewButton.addEventListener('click', () => {
                 // Handle view functionality
  
              const url = `https://ipfs.io/ipfs/${CID}`;
              window.open(url, '_blank');

            });
            
            actionCell.appendChild(viewButton);

          

          }
        });

        
      }
  );
  
    } 
  });
//check for request events and display in second table
  contract.getPastEvents("requestEvent", {  
    filter: { _owner: selectedAddress },
    fromBlock: 0,
    toBlock: "latest"
  }, (error, events) => {
    if (!error) {
      // Iterate through all events
     
      events.forEach(event => {

                const dataID = event.returnValues._hash;
                const requestorID = event.returnValues._requestor;
                const timeFile=event.returnValues._time;
                const requestorName = event.returnValues._requestorname;
                const projectTitle = event.returnValues._projecttitle;
                const projectHash = event.returnValues._projecthash;
                const projectDuration = event.returnValues._projectDuration;

                contract.getPastEvents("statusEvent", {  
                 filter: { _requestor:requestorID, _owner: selectedAddress, _hash: dataID },
                 fromBlock: 0,
                 toBlock: "latest"
                }, (error, events) => {
                  if (error) {
                    console.error(error);
                    return;
                  }
        
                  if (events.length > 0) {
                    const status = events.map(event => event.returnValues._request);
                    console.log(status);
                     if(status==1)
                        {
                            const row = table2.insertRow();
                            row.style.backgroundColor = '#eefcf7';
                            // Insert cells into the row
                            const dataIDCell = row.insertCell();
                            const requestorIDCell = row.insertCell();
                            const projectTitleCell=row.insertCell();
                            const dateFileCell=row.insertCell();
                            const accessDur=row.insertCell();
                            const statusCell=row.insertCell();
                            const ApprovalCell = row.insertCell();
                            
                            // Converting transaction time to human-readable format
                            const date = new Date(timeFile * 1000);
                            const options = { day: 'numeric', month: 'short', year: 'numeric' };
                            const dateString = date.toLocaleDateString('en-US', options);
                            const timeString = date.toLocaleTimeString();

                          
                            // Fill the cells with data
                            dataIDCell.innerHTML = "<a href='./datafilepage.html?id=" + dataID + "'>" + dataID.substring(2,7)+ "</a>";
                            requestorIDCell.innerHTML = "<a href='./identitypage.html?id=" + requestorID + "'>" + requestorName + "</a>";
                            projectTitleCell.innerHTML =  "<a href='./projectfilepage.html?id=" + projectHash + "' target='_blank'>" + projectTitle + "</a>";;
                            dateFileCell.innerHTML = dateString;
                            accessDur.innerHTML=projectDuration+" months";;
                            statusCell.innerHTML='Approved';

                           
                            const DownloadButton = document.createElement('i');
                            DownloadButton.className = 'fas fa-download fa-lg'; // Assuming you have the appropriate icon class
                            DownloadButton.setAttribute('aria-label', 'View Data Usage Report');
                            DownloadButton.setAttribute('title', 'View Data Usage report');
                            ApprovalCell.appendChild(DownloadButton);

                            const spacing = document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'); // Non-breaking space
                            ApprovalCell.appendChild(spacing);

                            const revokeButton = document.createElement('i');
                            revokeButton.className = 'fas fa-ban fa-lg';
                            revokeButton.setAttribute('aria-label', 'Revoke Access');
                            revokeButton.setAttribute('title', 'Revoke Access');
                            ApprovalCell.appendChild(revokeButton);

                          }

                          if(status==2)
                          {
                              const row = table2.insertRow();
                              row.style.backgroundColor = '#FFF0F1'; //#FFE5E8'
                              // Insert cells into the row
                              const dataIDCell = row.insertCell();
                              const requestorIDCell = row.insertCell();
                              const projectTitleCell=row.insertCell();
                              const dateFileCell=row.insertCell();
                              const accessDur=row.insertCell();
                              const statusCell=row.insertCell();
                              const ApprovalCell = row.insertCell();
                           
                              
                              // Converting transaction time to human-readable format
                              const date = new Date(timeFile * 1000);
                            const options = { day: 'numeric', month: 'short', year: 'numeric' };
                            const dateString = date.toLocaleDateString('en-US', options);
                              const timeString = date.toLocaleTimeString();
                            
                              // Fill the cells with data
                              dataIDCell.innerHTML = "<a href='./datafilepage.html?id=" + dataID + "'>" + dataID.substring(2,7)+ "</a>";
                              requestorIDCell.innerHTML = "<a href='./identitypage.html?id=" + requestorID + "'>" + requestorName + "</a>";
                              projectTitleCell.innerHTML =  "<a href='./projectfilepage.html?id=" + projectHash + "' target='_blank'>" + projectTitle + "</a>";;
                              dateFileCell.innerHTML = dateString;
                              accessDur.innerHTML= projectDuration+ " months";;
                              statusCell.innerHTML='Disapproved';
                            }

                          
                      
                  } else {

                     // Get the event data
          
        // Create a new table row
        const row = table2.insertRow();
        // Insert cells into the row
        const dataIDCell = row.insertCell();
        const requestorIDCell = row.insertCell();
        const projectTitleCell=row.insertCell();
        const dateFileCell=row.insertCell();
        const accessDur=row.insertCell();
        const statusCell=row.insertCell();
        const ApprovalCell = row.insertCell();
        
        // Converting transaction time to human-readable format
        const date = new Date(timeFile * 1000);
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const dateString = date.toLocaleDateString('en-US', options);
        const timeString = date.toLocaleTimeString();
      
        // Fill the cells with data
        dataIDCell.innerHTML = "<a href='./datafilepage.html?id=" + dataID + "'>" + dataID.substring(2,7)+ "</a>";
        requestorIDCell.innerHTML = "<a href='./identitypage.html?id=" + requestorID + "'>" + requestorName + "</a>";
        projectTitleCell.innerHTML =  "<a href='./projectfilepage.html?id=" + projectHash + "' target='_blank'>" + projectTitle + "</a>";;

       
      
        dateFileCell.innerHTML = dateString;
        accessDur.innerHTML=projectDuration + " months";
        statusCell.innerHTML='Pending';
     
        // Add a remove button to the last cell
        const acceptButton = document.createElement('i');
        acceptButton.className = 'fas fa-check fa-lg';
        acceptButton.setAttribute('aria-label', 'Accept');
        acceptButton.setAttribute('title', 'Accept');

        acceptButton.addEventListener('click', () => {
          if (confirm('Are you sure you want to accept this request?')) {
          
  
            contract.methods.respondrequest(requestorID, dataID,1).send({from: selectedAddress})
              .on('transactionHash', function(hash){
               
              })
              .on('receipt', function(receipt){
              
                document.getElementById("transaction-status2").innerHTML = "Request has been succesfully accepted (Transaction ID: " + receipt.transactionHash.substring(2, 7)+")";
                row.remove();
    
              })
              .on('error', function(error){
            
                document.getElementById("transaction-status2").innerHTML = "Transaction Failed: " + error;
        
              });
          }
        });
        
        ApprovalCell.appendChild(acceptButton);

        const spacing = document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'); // Non-breaking space
        ApprovalCell.appendChild(spacing);
        const rejectButton = document.createElement('i');
        rejectButton.className = 'fas fa-times-circle fa-lg';
        rejectButton.setAttribute('aria-label', 'Reject');    
        rejectButton.setAttribute('title', 'Reject');

        rejectButton.addEventListener('click', () => {
          if (confirm('Are you sure you want to reject this request?')) {
        
            contract.methods.respondrequest(requestorID, dataID,2).send({from: selectedAddress})
              .on('transactionHash', function(hash){
            
              })
              .on('receipt', function(receipt){
          
                document.getElementById("transaction-status2").innerHTML = "Request rejected succesfully (Transaction ID: " + receipt.transactionHash.substring(2, 7)+")";
                row.remove();
    
              })
              .on('error', function(error){
             
                document.getElementById("transaction-status2").innerHTML = "Transaction Failed: " + error;
        
              });
          }
        });
        ApprovalCell.appendChild(rejectButton);

        const spacing2 = document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'); // Non-breaking space
        ApprovalCell.appendChild(spacing2);
        
        const questionButton = document.createElement('i');
        questionButton.className = 'fas fa-question-circle fa-lg';
        questionButton.setAttribute('aria-label', 'Ask Question');
        questionButton.setAttribute('title', 'Ask Question');

        questionButton.addEventListener('click', () => {

             
          const url = `./questions.html?param1=${encodeURIComponent(requestorID)}&param2=${encodeURIComponent(projectHash)}&param3=${encodeURIComponent(selectedAddress)}`;

          window.open(url, '_blank');


  
    
        });
        ApprovalCell.appendChild(questionButton);

       
                  }
                });

      }
  );
  
    } 
  });
//check for events and display all the trasactions in third table
  contract.getPastEvents('allEvents', {
    filter: { _owner: selectedAddress },
    fromBlock: 0,
    toBlock: 'latest',

  }, (error, events) => {
    if (error) {
      console.error(error);
      return;
    }

                  for (let i = 0; i < events.length; i++) {
                const event = events[i];
                const type = event.event;
                const content = JSON.stringify(event.returnValues);
           
            if(type=='depositEvent'&&event.returnValues._owner==selectedAddress)
                {
                const row = table3.insertRow(-1);
                const typeCell = row.insertCell(0);
                const contentCell = row.insertCell(1);
                console.log(selectedAddress)
     

                const date = new Date(event.returnValues._time * 1000);
                const options = { day: 'numeric', month: 'short', year: 'numeric' };
                const dateString = date.toLocaleDateString('en-US', options);
                const timeString = date.toLocaleTimeString();
                
                //dataIDCell.innerHTML = "<a href='./datafilepage.html?id=" + dataID + "'>" + dataID.substring(2,7)+ "</a>";
                typeCell.innerText = "Data File Uploaded";
                contentCell.innerText = "The data file "+event.returnValues._hash.substring(2,7)+" was published by "+ event.returnValues._publisher.substring(0,8)+" on "+dateString+" at "+timeString;
                  }
      //console.log(`The publisher having address ${publisherAddress} has published the file having file id `);
            if(type=='removalEvent'&&event.returnValues._owner==selectedAddress)
                {
                const row = table3.insertRow(-1);
                const typeCell = row.insertCell(0);
                const contentCell = row.insertCell(1);

                const date = new Date(event.returnValues._time * 1000);
                const options = { day: 'numeric', month: 'short', year: 'numeric' };
                const dateString = date.toLocaleDateString('en-US', options);
                const timeString = date.toLocaleTimeString();

                typeCell.innerText = "Data File Removed";
                contentCell.innerText = "The data file "+event.returnValues._hash.substring(2,7)+" was removed on "+dateString+" at "+timeString;
                  }

            if(type=='requestEvent'&&event.returnValues._owner==selectedAddress)
                {
                const row = table3.insertRow(-1);
                const typeCell = row.insertCell(0);
                const contentCell = row.insertCell(1);

                const date = new Date(event.returnValues._time * 1000);
                const options = { day: 'numeric', month: 'short', year: 'numeric' };
                const dateString = date.toLocaleDateString('en-US', options);
                const timeString = date.toLocaleTimeString();

                typeCell.innerText = "Data Access Request";
                contentCell.innerText = "The data file "+ event.returnValues._hash.substring(2,7)+ " was requested by "+event.returnValues._requestor.substring(0,8)+" on "+dateString+" at "+timeString;
                  }

            if(type=='statusEvent'&&event.returnValues._owner==selectedAddress)
                {
               const row = table3.insertRow(-1);
                const typeCell = row.insertCell(0);
                const contentCell = row.insertCell(1);

                const date = new Date(event.returnValues._time * 1000);
                const options = { day: 'numeric', month: 'short', year: 'numeric' };
                const dateString = date.toLocaleDateString('en-US', options);

                const timeString = date.toLocaleTimeString();
    
                if(event.returnValues._request==1)
                typeCell.innerText = "Request Accepted";
                { contentCell.innerText = "The data file "+event.returnValues._hash.substring(2,7)+ " requested by "+event.returnValues._requestor.substring(0,8)+" was accepted on "+dateString+ " at "+timeString;
                }
                if(event.returnValues._request==2)
                {
                  typeCell.innerText = "Request Rejected";
                  contentCell.innerText = "The data file "+event.returnValues._hash.substring(2,7)+ " requested by "+event.returnValues._requestor.substring(0,8)+" was rejected on "+dateString+ " at "+timeString;
               
                }
                 }

      }
  });

}

addressSelect.addEventListener("change", (event) => {
  const  selectedAddress = event.target.value;
 
  updateTables(selectedAddress)

});

var updateButton = document.getElementById("updateButton");

// add a click event listener to the button
updateButton.addEventListener("click", function() {
  // your code to be executed when the button is clicked goes here
  

  const addressSelect = document.getElementById("addressSelect");
  const selectedOption = addressSelect.options[addressSelect.selectedIndex];
  const selectedAddress = selectedOption.value;
  
  // do something with the selected address, such as logging it to the console


  updateTables(selectedAddress)

});





// Example usage


// Lisences to the event change in the Wallet address selection










  