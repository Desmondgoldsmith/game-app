const GetSizedImages = (url: string) => {
  if (!url) return "";
  const target = "media/";
  //we are getting the index of '/media' in the url
  const index = url.indexOf(target) + target.length;
  //   then , we add crop/600/400 immediately after /media and continue with the rest
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default GetSizedImages;
