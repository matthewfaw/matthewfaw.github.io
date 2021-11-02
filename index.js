
var css_title = 'plain'

function switch_style ()
{
// You may use this script on your site free of charge provided
// you do not remove this notice or the URL below. Script from
// http://www.thesitewizard.com/javascripts/change-style-sheets.shtml
  var i, link_tag ;
    var changed = false
  for (i = 0, link_tag = document.getElementsByTagName("link") ; i < link_tag.length ; i++ )
  {
    if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) && link_tag[i].title) 
    {
        link_tag[i].disabled = true ;
        if (link_tag[i].title == css_title)
        {
            link_tag[i].disabled = false ;
            changed = true
        }
    }
  }
    if (changed){
        css_title = css_title === 'blue' ? 'plain' : 'blue'
    }
}

function showAll(toggle){
  var elem;
  if (toggle){
    document.getElementById('toggle').innerHTML='Selected Papers (<a href="javascript:void(0)" onclick="showAll(false)">Show all</a>):';
  } else {
    document.getElementById('toggle').innerHTML='Papers (<a href="javascript:void(0)" onclick="showAll(true)">Show selected</a>):';
  }

  elem=document.getElementById('last_paper');
  console.log(elem);
  for(elem; elem.previousSibling!=null; elem = elem.previousSibling){
    console.log(elem.className);
    if (elem.className == "regular"){
      console.log(elem.style.display);
      if (elem.style.display == "block"){
        elem.style.display = "";
      } else {
        elem.style.display = "block";
      }
    }
  }
  return true;
}

function showAllInfo(toggle){
  var elem;
  if (toggle){
    document.getElementById('toggleInfo').innerHTML='<a href="javascript:void(0)" onclick="showAllInfo(false)">More info</a>';
  } else {
    document.getElementById('toggleInfo').innerHTML='<a href="javascript:void(0)" onclick="showAllInfo(true)">Less info</a>';
  }

  var elems = document.getElementsByClassName("regularInfo")
  for (let elemId=0; elemId < elems.length; elemId++) {
      var elem = elems.item(elemId);
      if (toggle) {
          elem.style.display = "none";
      } else {
          elem.style.display = "block";
      }
  }

  return true;
}
