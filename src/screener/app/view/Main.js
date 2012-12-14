/*
 * This class defines our main view with navigation.View
 * to allow for easy switching between screens, a back button, etc.
 */

Ext.define("Screener.view.Main", {
    extend: 'Ext.Container',
    xtype: 'mainView',
    id: "mainView",
    config: {
        height: 600,
        items: [
        {
            xtype: 'tabpanel',
            border: '1 1 1 0',
            margin: '0 10 10 0',
            animation: 'flip',
            width:'100%',
            id: 'maintabs',
            activeItem : 0,
            tabBar: {
                docked: 'right',
				width:'5%',
            },
            listeners: {
                activate: function () {
                    if(this.getActiveItem().getId() == 'assignPatientButton') {
                        Screener.app.getController('Application').showPatients(); 
                    }
                },
                activeitemchange: function (tabPanel, tab, oldTab) {
                    console.log(this.getActiveItem().getId());
                    switch(this.getActiveItem().getId()) {
                        case 'assignPatientButton' :
                            Screener.app.getController('Application').showPatients();
                            break;
                        case 'showPharmacyButton' :
                            Screener.app.getController('Application').showPharmacy();
                            break;
                        case 'showLabButton' :
                            Screener.app.getController('Application').showLab();
                            break;
                    }
                } 
            },
            items: [
			
			{
                id: 'assignPatientButton',
                xtype: 'patientView',
                title : '<div class="screener_tabs">OPD</div>'
            }, {
                id: 'showPharmacyButton',
                xtype: 'pharmacylist',
                title : '<div class="screener_tabs">PHARMACY</div>'
            }, {
                id: 'showLabButton',
                xtype: 'labOrder',
                title : '<div class="screener_tabs">LABORATORY</div>' 
            }, {   
                id: 'showVitalsButton',
                xtype: 'vitalslist',
                title : '<div class="screener_tabs">VITAL</div>'
            }, {   
                id: 'showUltrasoundButton',
                title : '<div class="screener_tabs">ULTRASOUND</div>' 
            },
            ]
        },
        ]
        
    }
    
});
