({
    doInit : function(component, event, helper) {
        /**
         * Step-1:
         * get the contacts from the server side
         * and display in the lightning component
         */
        var action = component.get('c.getContactList');
        /**
         * Step-2:
         * set parameters to the component
         * for ex: if in method v pass any arguments like getContactList(String Name)
         * here in action.setParams ({ Name : 'Test'})
         * optional
         */
        action.setParams({
            
        });
        /**
         * Step-3:
         * Set callback function
         * 
         */
        action.setCallback(this, function(response){
            var responseValue = response.getReturnValue();
            console.log('responseValue', responseValue);
            component.set('v.contactList', responseValue);
        }, 'SUCCESS');
        /**
         * Step-4
         * enqueue the next actions
         */
        $A.enqueueAction(action);
    }
})
