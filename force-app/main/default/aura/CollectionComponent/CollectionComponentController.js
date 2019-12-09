({
    doClick : function(component, event, helper) {
        //to check the component is valid or not, return type is boolean
        alert(component.isValid());
        console.log(component.isValid());
        //to cehck the name displayed of the comp
        alert(component.getName());
        console.log(component.getName());
        //to get the attribute default name declared in the attribute tag
        alert(component.get('v.whom'));
        console.log(component.get('v.whom'));
        //to set values to the attribute
        //set(String keyObject valueProvider)
        //key -- 'v.whom'
        //value -- value to be set for that key
        component.set('v.whom', 'The value');
        alert('success in setting parameter');
        console.log(component.set('v.whom','the value'));
        //to find the attribute declared
        //we declare a variable in js and then try finding the variable value
        var ageParam = component.find('testInput');
        alert(ageParam.get('v.value'));
        ageParam.set('v.value','89');
        alert('successfully set age');
        console.log(component.set('v.value','89'));
    }
})
