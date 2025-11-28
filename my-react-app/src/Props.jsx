//props:::::    Properties  :::sharing of properties between two files i.e { from parent to child by default }


// main.jsx <---App.jsx<--- home.jsx
//data flow direction----------------->>
// here home is child of parent app and main
// data can only be shared by PARENTS TO CHILD AND NOT CHILD TO PARENT

// then here main can share data with app and home 
// app can share data with home
// but home cannot share any data with parents


//props drilling:::
// the problem that occurs when data is passed through multiple files between parent and child.
//  here the files in between are unncessaerily receiving the data as they are not linked directly.
//unnnecessary passing of data in the components of a file


///solution to props drilling:::createContext:manages states::creates a central library
