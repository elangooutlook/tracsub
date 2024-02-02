const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const MODEL_NAME = "gemini-pro";
  const API_KEY = "YOUR_API_KEY";
  
  async function run() {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  
    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };
  
    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];
  
    const parts = [
      {text: "Analyse the json data and give insights in the specified format {\"suggestion\": }"},
      {text: "input: {  \"email\": \"user5292@gmail.com\",  \"subscriptions\": [    {      \"id\": \"1\",      \"name\": \"Netflix\",      \"cost\": \"10\",      \"currency\": \"INR\",      \"date\": \"2024-01-16\",      \"valid\": true,      \"period\": \"daily\",      \"nextPayment\": \"2024-01-17\",      \"paymentType\": \"Cash\",      \"category\": \"Entertainment\",      \"reminder\": \"3\",      \"type\": \"Recurring\",      \"notes\": \"This is a note for Netflix.\",      \"plan-name\": \"Basic\",      \"url\": \"https://www.netflix.com\"    },    {      \"id\": \"2\",      \"name\": \"Amazon Prime Video\",      \"cost\": \"150\",      \"currency\": \"INR\",      \"date\": \"2024-01-15\",      \"valid\": false,      \"period\": \"monthly\",      \"nextPayment\": \"No\",      \"paymentType\": \"Credit Card\",      \"category\": \"Entertainment\",      \"reminder\": \"3\",      \"type\": \"One time\",      \"notes\": \"This is a note for Amazon Prime Video.\",      \"plan-name\": \"Premium\",      \"url\": \"https://www.primevideo.com\"    },    {      \"id\": \"3\",      \"name\": \"Disney+\",      \"cost\": \"30\",      \"currency\": \"INR\",      \"date\": \"2024-01-14\",      \"valid\": true,      \"period\": \"weekly\",      \"nextPayment\": \"2024-01-21\",      \"paymentType\": \"Debit Card\",      \"category\": \"Entertainment\",      \"reminder\": \"3\",      \"type\": \"Recurring\",      \"notes\": \"This is a note for Disney+.\",      \"plan-name\": \"Basic\",      \"url\": \"https://www.disneyplus.com\"    },    {      \"id\": \"4\",      \"name\": \"Hulu\",      \"cost\": \"20\",      \"currency\": \"INR\",      \"date\": \"2024-01-13\",      \"valid\": false,      \"period\": \"annually\",      \"nextPayment\": \"NO\",      \"paymentType\": \"Bank Account\",      \"category\": \"Entertainment\",      \"reminder\": \"3\",      \"type\": \"One time\",      \"notes\": \"This is a note for Hulu.\",      \"plan-name\": \"Premium\",      \"url\": \"https://www.hulu.com\"    },    {      \"id\": \"5\",      \"name\": \"Apple Music\",      \"cost\": \"50\",      \"currency\": \"INR\",      \"date\": \"2024-01-12\",      \"valid\": true,      \"period\": \"daily\",      \"nextPayment\": \"2024-01-13\",      \"paymentType\": \"Credit Card\",      \"category\": \"Entertainment\",      \"reminder\": \"3\",      \"type\": \"Recurring\",      \"notes\": \"This is a note for Apple Music.\",      \"plan-name\": \"Basic\",      \"url\": \"https://www.apple.com/apple-music/\"    }  ]}"},
      {text: "output: {\"suggestion\": \"It seems you have several entertainment subscriptions. Consider evaluating their necessity and potentially reducing them to save on costs.\"}"},
      {text: "input: {\n  \"email\": \"uese@gmail.com\",\n  \"subscriptions\": [\n    {\n      \"id\": \"6\",\n      \"name\": \"Microsoft Office 365\",\n      \"cost\": \"500\",\n      \"currency\": \"INR\",\n      \"date\": \"2024-02-01\",\n      \"valid\": true,\n      \"period\": \"monthly\",\n      \"nextPayment\": \"2024-03-01\",\n      \"paymentType\": \"Credit Card\",\n      \"category\": \"Productivity Tools\",\n      \"reminder\": \"5\",\n      \"type\": \"Recurring\",\n      \"notes\": \"Access to Word, Excel, PowerPoint, and more.\",\n      \"plan-name\": \"Business Standard\",\n      \"url\": \"https://www.office.com\"\n    },\n    {\n      \"id\": \"7\",\n      \"name\": \"Adobe Creative Cloud\",\n      \"cost\": \"1000\",\n      \"currency\": \"INR\",\n      \"date\": \"2024-01-25\",\n      \"valid\": true,\n      \"period\": \"monthly\",\n      \"nextPayment\": \"2024-02-25\",\n      \"paymentType\": \"Debit Card\",\n      \"category\": \"Productivity Tools\",\n      \"reminder\": \"7\",\n      \"type\": \"Recurring\",\n      \"notes\": \"Full suite of creative apps including Photoshop, Illustrator, and more.\",\n      \"plan-name\": \"All Apps\",\n      \"url\": \"https://www.adobe.com/creativecloud.html\"\n    },\n    {\n      \"id\": \"8\",\n      \"name\": \"Slack\",\n      \"cost\": \"300\",\n      \"currency\": \"INR\",\n      \"date\": \"2024-01-20\",\n      \"valid\": true,\n      \"period\": \"monthly\",\n      \"nextPayment\": \"2024-02-20\",\n      \"paymentType\": \"Bank Account\",\n      \"category\": \"Productivity Tools\",\n      \"reminder\": \"3\",\n      \"type\": \"Recurring\",\n      \"notes\": \"Messaging app for teams that integrates with various tools.\",\n      \"plan-name\": \"Standard\",\n      \"url\": \"https://slack.com\"\n    },\n    {\n      \"id\": \"9\",\n      \"name\": \"Trello\",\n      \"cost\": \"200\",\n      \"currency\": \"INR\",\n      \"date\": \"2024-02-05\",\n      \"valid\": true,\n      \"period\": \"monthly\",\n      \"nextPayment\": \"2024-03-05\",\n      \"paymentType\": \"Credit Card\",\n      \"category\": \"Productivity Tools\",\n      \"reminder\": \"5\",\n      \"type\": \"Recurring\",\n      \"notes\": \"Web-based Kanban-style list-making application.\",\n      \"plan-name\": \"Business Class\",\n      \"url\": \"https://trello.com\"\n    },\n    {\n      \"id\": \"10\",\n      \"name\": \"Asana\",\n      \"cost\": \"450\",\n      \"currency\": \"INR\",\n      \"date\": \"2024-01-15\",\n      \"valid\": true,\n      \"period\": \"monthly\",\n      \"nextPayment\": \"2024-02-15\",\n      \"paymentType\": \"Debit Card\",\n      \"category\": \"Productivity Tools\",\n      \"reminder\": \"7\",\n      \"type\": \"Recurring\",\n      \"notes\": \"Project management tool that helps teams organize, track, and manage their work.\",\n      \"plan-name\": \"Premium\",\n      \"url\": \"https://asana.com\"\n    }\n  ]\n}"},
      {text: "output: {\"suggestion\": \"Your productivity tools subscriptions appear to be substantial. Explore potential cost savings by evaluating if all these tools are necessary or if there are cost-effective alternatives.\"}"},
      {text: "input: "},
      {text: "output: "},
    ];
  
    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
      safetySettings,
    });
  
    const response = result.response;
    console.log(response.text());
  }