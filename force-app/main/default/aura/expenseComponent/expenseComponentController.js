({
    clickReimburse : function(component, event, helper) {
        var expense = component.get("v.expense");
        var updateEvent = component.getEvent("v.updateExpense");
        updateEvent.setParams({"expense":expense});
        updateEvent.fire();
    }
})
