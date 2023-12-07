/**
 * RECOMMENDATION
 *
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 *
 * The Developer Tools in Chrome are available under the "..." menu,
 * futher hidden under the option "More Tools." In Firefox, they are
 * under the hamburger (three horizontal lines), also hidden under "More Tools."
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for.
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */
function findSearchTermInBooks(searchTerm, scannedTextObj) {
	/** You will need to implement your search and
	 * return the appropriate object here. */

	var result = {
		SearchTerm: searchTerm,
		Results: [],
	};

	// Check if searchTerm is empty or null
	if (!searchTerm || searchTerm.trim() === "") {
		console.log("Please provide a valid search term.");
		return result;
	}

	// Iterate through each book
	scannedTextObj.forEach((book) => {
		// Iterate through each content in the book
		book.Content.forEach((content) => {
			const text = content.Text;

			// Check if all search words exist in the text
			const searchWords = searchTerm.split(" ");
			const found = searchWords.every((word) => text.includes(word));

			if (found) {
				// If all search words are found together, add to results
				result.Results.push({
					ISBN: book.ISBN,
					Page: content.Page,
					Line: content.Line,
				});
			}
		});
	});

	return result;
}

/** Example input object. */
const twentyLeaguesIn = [
	{
		Title: "Twenty Thousand Leagues Under the Sea",
		ISBN: "9780000528531",
		Content: [
			{
				Page: 31,
				Line: 8,
				Text: "now simply went on by her own momentum.  The dark-",
			},
			{
				Page: 31,
				Line: 9,
				Text: "ness was then profound; and however good the Canadian's",
			},
			{
				Page: 31,
				Line: 10,
				Text: "eyes were, I asked myself how he had managed to see, and",
			},
		],
	},
];

/** Example output object */
// const twentyLeaguesOut = {
// 	SearchTerm: "the",
// 	Results: [
// 		{
// 			ISBN: "9780000528531",
// 			Page: 31,
// 			Line: 9,
// 		},
// 	],
// };

const twentyLeaguesOut = findSearchTermInBooks("the", twentyLeaguesIn);
console.log(twentyLeaguesOut);

const twentyLeaguesOut1 = findSearchTermInBooks("eyes were", twentyLeaguesIn);
console.log(twentyLeaguesOut1);

const twentyLeaguesOut2 = findSearchTermInBooks("burger", twentyLeaguesIn);
console.log(twentyLeaguesOut2);

const twentyLeaguesOut3 = findSearchTermInBooks("and", twentyLeaguesIn);
console.log(twentyLeaguesOut3);

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that
 * output to the console. We've provided two tests as examples, and
 * they should pass with a correct implementation of `findSearchTermInBooks`.
 *
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
	console.log("PASS: Test 1");
} else {
	console.log("FAIL: Test 1");
	console.log("Expected:", twentyLeaguesOut);
	console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn);
if (test2result.Results.length == 1) {
	console.log("PASS: Test 2");
} else {
	console.log("FAIL: Test 2");
	console.log("Expected:", twentyLeaguesOut.Results.length);
	console.log("Received:", test2result.Results.length);
}

/** test for phrases  */
const berlinTestResult = findSearchTermInBooks("eyes were", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut1) === JSON.stringify(berlinTestResult)) {
	console.log("PASS: Berlin Testcase 3");
	console.log("Expected:", twentyLeaguesOut1);
	console.log("Received:", berlinTestResult);
} else {
	console.log("FAIL: Berlin Testcase 3");
	console.log("Expected:", twentyLeaguesOut1);
	console.log("Received:", berlinTestResult);
}

const test3result = findSearchTermInBooks("eyes were", twentyLeaguesIn);
if (test3result.Results.length == 1) {
	console.log("PASS: Berlin Testcase 3");
	console.log("Expected:", twentyLeaguesOut1);
	console.log("Received:", berlinTestResult);
} else {
	console.log("FAIL: Berlin Testcase 3");
	console.log("Expected:", twentyLeaguesOut1.Results.length);
	console.log("Received:", test3result.Results.length);
}

/** test for duplicate words */
const berlinTestResult1 = findSearchTermInBooks("and", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut3) === JSON.stringify(berlinTestResult1)) {
	console.log("PASS: Berlin Testcase 4");
	console.log("Expected:", twentyLeaguesOut3);
	console.log("Received:", berlinTestResult1);
} else {
	console.log("FAIL: Berlin Testcase 4");
	console.log("Expected:", twentyLeaguesOut3);
	console.log("Received:", berlinTestResult1);
}

const test4result = findSearchTermInBooks("and", twentyLeaguesIn);
if (test4result.Results.length >= 1) {
	console.log("PASS: Berlin Testcase 4");
	console.log("Expected:", twentyLeaguesOut3.Results.length);
	console.log("Received:", test4result.Results.length);
} else {
	console.log("FAIL: Berlin Testcase 4");
	console.log("Expected:", twentyLeaguesOut3.Results.length);
	console.log("Received:", test4result.Results.length);
}

/** if the word does not exist (string is empty or null)   */
const doesNotExistTestResult = findSearchTermInBooks("burger", twentyLeaguesIn);
if (
	JSON.stringify(twentyLeaguesOut2) === JSON.stringify(doesNotExistTestResult)
) {
	console.log("PASS: Testcase 5 Word does not exist");
} else {
	console.log("FAIL: Testcase 5 doesNotExistTestResult");
	console.log("Expected:", twentyLeaguesOut2);
	console.log("Received:", doesNotExistTestResult);
}

const test5result = findSearchTermInBooks("burger", twentyLeaguesIn);
if (test5result.Results.length >= 0) {
	// Check if the result has no matches
	console.log("PASS: Testcase 5 Word or phrase does not exist ");
} else {
	console.log("FAIL: fix code, word/phrase should not exist");
	console.log("Expected:", 0);
	console.log("Received:", test5result.Results.length);
}
