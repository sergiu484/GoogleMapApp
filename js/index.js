function initMap() {
    var losAngeles = {
        lat: 34.052235, 
        lng: -118.243683
      };
    map = new google.maps.Map(document.getElementById('map'), {
      center: losAngeles,
      zoom: 11,
      mapTypeId: 'roadmap'
    });
  }