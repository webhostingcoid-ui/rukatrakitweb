    $(document).ready(function(){
        $("#searchBar").on("keyup",function(){
            var value= $(this). val().toLowerCase();
            $(".box").filter(function function_name(){
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);

            })
        });
    });
