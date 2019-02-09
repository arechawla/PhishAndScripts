//Utilize markov chains and probability matrices to identify potential phising
//scams

var rawText = "";

//create a 2d array to store frequency of letters appearing in relation to other
 // var countMatrix = new Array(26);
 // for (var i = 0; i < countMatrix.length; i++) {
 //   countMatrix[i] = new Array(26);
 // }


var sums[]

countMatrix = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

//take the raw text from the website and convert to string
function setRawText() {
    rawText = document.getElementById("og").value;
    rawText = rawText.toLowerCase();
    //document.getElementById("demo").innerHTML = rawText;
}

var cleanString = "";
//remove punctuation and unessecary chars from string
function makeCleanText() {
    setRawText();
    for (var i = 0; i < rawText.length; i++) {
        var charCode = rawText.charCodeAt(i);
        if (charCode < 123 && charCode > 96) {
            cleanString += rawText.charAt(i);
        }
    }
    //document.getElementById("demo").innerHTML = cleanString;
}

//store counts of frequencies in array
var aString = "";
function storeCountArray() {
    makeCleanText();

    document.write("frequency array:");
    document.write("<br>");
    document.write("<br>");

    var current = 0;
    var previous = 0;
    var difference = 0;
    var aString = "";
    for (var i = 0; i < cleanString.length; i++) {
        difference = cleanString.charCodeAt(i) - 97;
        current = difference;

        for (var row = 0; row < countMatrix.length; row++) {

            for (var col = 0; col < countMatrix[row].length; col++) {
                //document.write(countMatrix[row][col]);

                if (row == previous && col == difference) {
                    countMatrix[row][col] = countMatrix[row][col] + 1;
                  }

                }
                //document.write("<br>");
            }

        previous = difference;

    }


    for (var row = 0; i < countMatrix.length; row++) {
        for (var col = 0; col < countMatrix.length; count++) {

        }
    }


    for (int row = 0; row < count.length; row++) {
        for (int col = 0; col < count[0].length; col++) {
            sums[row] = sums[row] + count[row][col]; //getting row sum
            prob[row][col] = count[row][col]; //copying count to prob
        }
    }

    for (var k = 97; k < 123; k++) {
      document.write(String.fromCharCode(k) + "      ");
    }

    document.write("<br>");
    document.write("<br>");

    for (var row = 0; row < countMatrix.length; row++) {
        for (var col = 0; col < countMatrix[row].length; col++) {
          document.write(countMatrix[row][col]);
          document.write("       ");
        }
        document.write("<br>");
    }
}


function makeProbArray() {
    storeCountArray();
    document.write("<br>");
    document.write("<br>");
    document.write("Probabilty array:");
    document.write("<br>");

    var totalSum = 0;

    for (var i = 0; i < countMatrix.length; i++) {
        for (var j = 0; j < countMatrix.length; j++) {
          totalSumsum += countMatrix[i][j];
        }
    }

    for (var i = 0; i < countMatrix.length; i++) {
      for (var j = 0; i < countMatrix[i].length; j++) {
          countMatrix[i][j] = (countMatrix[i][j] / totalSum);
      }
    }

    document.write(totalSum);


}
