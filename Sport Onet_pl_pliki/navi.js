function navi(PGNUM, PGTOTAL, PREF, POST)
{
if (PGTOTAL > 1)
   {
   var pic_ra = '<IMG src="_d/a_pa.gif" border=0 alt="Nastêpne">'
   var pic_rn = '<IMG src="_d/a_pn.gif" border=0 alt="">'
   var pic_la = '<IMG src="_d/a_la.gif" border=0 alt="Poprzednie">'
   var pic_ln = '<IMG src="_d/a_ln.gif" border=0 alt="">'
   var pic_c =  ''
   var St = 'nav'
   var Sep = '<IMG src="_d/0.gif" width=3>'
   var NumOfPos = 5
   var ActPlace = 0.5
   var Dot3 = true

	document.write('<TABLE border=0 cellpadding=0 cellspacing=0><TR><TD valign=top align=right>')
	if (PGNUM > 1) { document.write('<A href="'+PREF+(PGNUM-1)+','+POST+'">'+pic_la+'</A>') }
	else 				{ document.write(pic_ln) }
	document.write('</TD><TD class='+St+' valign=middle nowrap '+pic_c+'>&nbsp;')
	if (PGTOTAL > NumOfPos)
		{
		var cnt = Math.round(PGNUM -(NumOfPos /2) -1)
		var act = Math.round(NumOfPos *ActPlace)
		if (PGNUM <= act)
			{
			cnt = 0
			act = PGNUM
			}
		if (PGNUM > PGTOTAL -(NumOfPos -act))
			{
			cnt = PGTOTAL -NumOfPos 
			act = PGNUM -cnt
			}	
		}
	else
		{
		cnt = 0
		act = PGNUM
		}

	if (cnt > 0 && Dot3)
		{
		document.write('<A href="'+PREF+cnt+','+POST+'" class='+St+'>...</A>'+Sep)
		}
	var band = NumOfPos +cnt
	var that = act +cnt
	while (cnt < band)
		{  
		cnt++
		if (cnt <= PGTOTAL)
			{
			if (cnt == that)	{ document.write('<B>'+cnt+'</B>') }
			else					{ document.write('<A href="'+PREF+cnt+','+POST+'" class='+St+'>'+cnt+'</A>') }
			document.write(Sep)
			}
		}
	if (cnt < PGTOTAL && Dot3)
		{
		document.write('<A href="'+PREF+(cnt+1)+','+POST+'" class='+St+'>...</A>')
		}
	document.write('&nbsp;</TD><TD valign=left>')
   if (PGNUM < PGTOTAL) { document.write('<A href="'+PREF+(PGNUM+1)+','+POST+'">'+pic_ra+'</A>')	}
   else 						{ document.write(pic_rn)	}
	document.write('</TD></TR></TABLE>')
	}
}
