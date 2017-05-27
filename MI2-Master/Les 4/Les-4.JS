"use strict";

$(document).ready(function () 
{
    var location = $("li").last().detach();
    var amount = $("li").length;
    var line   = $("li:nth-child(3n)").text();
    
    $($("li").first()).before("Aantal plaatsen: " + amount + "<br>");
    $($("li").first()).before(location);
    $($("li").last()).after("<br>"+ "Weer 3: " + line );
    
});