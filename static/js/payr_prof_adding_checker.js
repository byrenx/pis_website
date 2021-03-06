  $("#id_payroll_month").change(function(){
      payroll_month = $(this).val().split("-");
      $.ajax({
         url : "/security/employee/payprofile/isallowtoadd",
         type: "GET",
         data: {"pay_year"  : payroll_month[0],
                "pay_month" : payroll_month[1]},
         success: function(data){
              if (data == "notallowed"){
                  $("#id_submit").attr("disabled", "disabled").removeClass().addClass("btn btn-default");
                  $("#id_msg").html("<p class='alert alert-warning'>Adding is disabled for approved payroll month. Please select other month</p>");
              }else{
                  $("#id_submit").removeAttr("disabled").removeClass().addClass("btn btn-primary");
                  $("#id_msg").html("");
              }
         }
      });
  });
