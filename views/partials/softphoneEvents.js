function onSuccessfulLogin() {
    sforce.opencti.notifyInitializationComplete({
        callback: function(response) {
            if (response.success) {
                console.log('Initialization complete!');
            } else {
                console.log('There was an error. ', response.errors);
            }
        }
    });
}