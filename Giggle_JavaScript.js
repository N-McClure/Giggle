//Functions To Validate Input and Other Fun Things...I Hope:

//Function to Validate if the User's Password Matches the Confirmation one in the Log-In page and then checks to See if it reaches the Minimum Length:
function passwordMatch()
{
    //Input from Text Boxes = Variables:
    let x = document.forms["Fill it Up"]["PassWord"].value;
    let y = document.forms["Fill it Up"]["ConfirmPassWord"].value;

    //The Comparison:
    if (x == y)
    {
        //Nested IF statements to check Length:
        var length = x.length;
        //Check the Length:
        if (length >= 8)
        {
            return true;
        }
        else if (length < 8)
        {
            alert("Password Input does NOT follow the minimum Length.");
            return false;
        }
    }
    else
    {
        alert("Password and Confirmation Password Input DON'T Match.");
        return false;
    }

}

//Function to Read and Search Based on the User's Search Query:
function FindJokes()
{
    //Input in the Joke Search Bar = Variables:
    let x = document.forms["SearchSomething"]["Joke_Search"].value;

    var search = x.toLowerCase();

    //The Searching of Related Links:

    //The Search to Page with the Links Based on Search Query Input:
    var searchPage = ("https://www.google.com/search?q=" + search + " jokes");
    var resultPage = ("Joke_Results.html");
    open(searchPage);

    //The Scraping Part of the Function:
    //No Idea What I am Doing...Help!

    //Sets the value of variable "hyperLinks" to the data of the HTML <cite> tag:
    var hyperLinks = searchPage.getElementsByTagName('a');
    //The Array of Hyper-Links:
    const Links_Array = [hyperLinks];
    

}

