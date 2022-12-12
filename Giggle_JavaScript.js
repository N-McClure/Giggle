//Function to Validate if the User's Password Matches the Confirmation one in the Log-In page:
function passwordMatch()
{
    var pw_Set = document.getElementById("PassWord").value;
    var pw_Match = document.getElementById("ConfirmPassWord").value;
    
    let Message;
    if (pw_Set == pw_Match)
    {
        return true;
    }
    else
    {
        window.alert("Passwords DON'T Match.");
        return false;
    }
}