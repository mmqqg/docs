jQuery(document).ready
(
    $("a[href]").each(function()
   { 
        var url = jQuery(this).attr('href');
        //var url = this.href;
        if(url.indexOf("http")<0) return true;
        //if(url.indexOf("#")<0) return true;
        if(url.indexOf("mmqqg.com")>0) return true;
        jump = 'http://www.mmqqg.com/j?url=' + encodeURIComponent(url);
        //this.href = jump;
        //alert(jump);
        //console.log(url);
        $(this).attr('href',jump);
   })
);
