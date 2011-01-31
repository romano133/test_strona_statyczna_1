function SondaWyniki($id,$height,$miejsce)
{
  window.open("http://rozmowy.onet.pl/_loinc/sonda/wyniki.html?ITEM="+ $id +"&MIEJSCE="+ $miejsce +"","","toolbar=no,directories=no,width=495,height="+ $height +",status=no,scrollbars=no,resizable=yes,menubar=no");
}

function SondaChecked($id,$height,$miejsce) 
{
	for ($i = 0; $i < eval("document.oid"+ $id +".v.length"); $i++){
		if (eval("document.oid"+ $id +".v["+ $i +"].checked")) {
		  SondaWyniki($id,$height,$miejsce)
			return true;
		}
	}
	alert ("OnetSonda: Nie zaznaczono odpowiedzi.");
	return false;
}

function Sonda ($curr, $alist, $common, $enabled, $disabled)
{
  var $dlist = "";
  var $o1 = document.cookie.indexOf ("onet_sonda=");
  if ($o1 >= 0)
  {
    var $dlist = document.cookie.substr ($o1 + 11);
    var $o2 = $dlist.indexOf ("; ");
    if ($o2 >= 0) $dlist = $dlist.substr (0, $o2);
    $dlist = unescape ($dlist);
    var $tlist = ","+ $alist +",";
    var $darr = $dlist.split (/,/);
    var $narr = new Array ();
    for (var $i =0; $i < $darr.length; ++ $i)
      if ($darr[$i].length && ($tlist.indexOf (","+ $darr[$i] +",") >= 0))
        $narr[$narr.length] = $darr[$i];
        
    if ($narr.join(",") != $dlist)
      document.cookie = 
        'onet_sonda='+ $narr.join(",") +
        '; expires='+ (new Date((new Date()).getTime() + 3600*24*1000)).toGMTString() +
        '; path=/'+
        '; domain=.onet.pl';
    $dlist = ","+ $dlist +",";
  }

  var $body = $common + (($dlist.indexOf (","+ $curr +",") >= 0) ? $disabled : $enabled);
  for (var $i = 0; $i < $body.length; ++ $i)
    if ("%" == $body.substr ($i, 1))
      $body = $body.substr (0, $i) + unescape ($body.substr ($i, 3)) + $body.substr ($i + 3)
  document.write ($body)

}