
// ajax delete lead

const deleteLead = (leadId) => {
  const url = '/lead/' + leadId + '/delete-json';
  const redirectUrl = '/leads';

  var xhr = new XMLHttpRequest();
  const el = document.getElementById('lead.id');

  xhr.open('POST', url, true)
  xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
  xhr.onreadystatechange = function() {
    if (this.status == 200) {
      console.log(xhr.responseText);
      
    } else {
      console.log('server error');
    }
  }
  xhr.onerror = function() {
    console.log('something went wrong');
  };
  xhr.send()
  // return setInterval(() => {
  //   return window.location.href = redirectUrl;
  // }, 5000);
}

// document.getElementById('deleteBtn').addEventListener('click', deleteLead);