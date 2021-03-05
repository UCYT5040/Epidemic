warnUser = true
console.log("Hey there! Wanna try some commands in the console? Feel free, but make sure they are safe. Your whole account is at risk if someone gets ahold of your user token. If you would like to find your usertoken for custom skins and testing our api, run getToken().")
function getToken() {
  if (warnUser) {
  console.log("Are you sure? Make sure nobody can see your screen. Run this commands again to get your token.")
  return null
  }
  else {
    console.log("Your user token (without symbols) is >>>!<<<" + token + ">>>!<<<")
  }
}