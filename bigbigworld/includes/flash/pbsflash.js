var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

    function PBS_FlashDispatch(PBScontentURL, PBScontentVersion, PBSaltURL) {
        if (PBScontentURL.indexOf("/") == 0)
	  PBScontentURL = location.protocol + "//" + window.location.host + PBScontentURL;
	if (PBScontentURL.indexOf("http://") != 0) {
	  var baseURL = location.href;
	  PBScontentURL = baseURL.substring(0, baseURL.lastIndexOf("/") + 1) + PBScontentURL;
	}

        if (PBSaltURL.indexOf("/") == 0)
	  PBSaltURL = location.protocol + "//" + window.location.host + PBSaltURL;
	if (PBSaltURL.indexOf("http://") != 0) {
	  var baseURL = location.href;
	  PBSaltURL = baseURL.substring(0, baseURL.lastIndexOf("/") + 1) + PBSaltURL;
	}

        return MM_FlashDispatch(PBScontentURL,
                                PBScontentVersion,
				false,
				PBSaltURL,
				false,
				PBSaltURL,
				PBSaltURL,
				true);

    }

    function PBS_CheckIfViewed(PBSflashName) {
    	var search = PBSflashName + "=";
	if (document.cookie.indexOf(search) != -1) {
	  // This animation has been viewed.
	  return true;
	} else {
	  // Set a cookie to expire after about two months.
	  var expires = new Date();
	  // expires.setTime(expires.getTime() + (60 * 60000 * 60 * 24));
	  // For testing, the cookie expires in 10 seconds.
	  expires.setTime(expires.getTime() + 10000);
	  document.cookie = PBSflashName + "=1; expires=" + expires.toGMTString();
	  return false;
	}
    }

    function PBS_SkipIfViewed(PBSflashName, PBSredirectURL) {
      	if (PBS_CheckIfViewed(PBSflashName)) {
          location = PBSredirectURL;
	  return true;
      	} else {
          return false;
      	}
    }
	  
    function PBS_FlashCanPlay(PBScontentVersion) {
    	var PBS_FlashStatus = new MM_FlashInfo();
    	return PBS_FlashStatus.canPlay(PBScontentVersion);
    }


}
