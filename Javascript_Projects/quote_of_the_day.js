var arrayOfQuotes =[
    {
      'author':'Dalai Lama' ,
      'quote':'The purpose of our lives is to be happy.' 
    },
    {
        'author':'John Lennon' ,
        'quote':'Life is what happens when you’re busy making other plans.' 
      },
      {
        'author':'Stephen King' ,
        'quote':'Get busy living or get busy dying.' 
      },
      {
        'author':'Mae West' ,
        'quote':'You only live once, but if you do it right, once is enough.' 
      },
      {
        'author':'Thomas A. Edison' ,
        'quote':'Many of life’s failures are people who did not realize how close they were to success when they gave up.' 
      },
      {
        'author':'Albert Einstein' ,
        'quote':'If you want to live a happy life, tie it to a goal, not to people or things.' 
      },
      {
        'author':'Will Smith' ,
        'quote':'Money and success don’t change people; they merely amplify what is already there.' 
      },
      {
        'author':'Steve Jobs' ,
        'quote':'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.' 
      },
      {
        'author':'Seneca' ,
        'quote':'Not how long, but how well you have lived is the main thing.' 
      },
      {
        'author':'Eleanor Roosevelt' ,
        'quote':'If life were predictable it would cease to be life, and be without flavor.' 
      },
      {
        'author':'Henry Ford' ,
        'quote':'The whole secret of a successful life is to find out what is one’s destiny to do, and then do it' 
      },
      {
        'author':'Ernest Hemingway' ,
        'quote':'In order to write about life first you must live it.' 
      },
      {
        'author':'Frank Sinatra' ,
        'quote':'The big lesson in life, baby, is never be scared of anyone or anything' 
      },
      {
        'author':'Leo Burnett' ,
        'quote':'Curiosity about life in all of its aspects, I think, is still the secret of great creative people' 
      },
      {
        'author':'Soren Kierkegaard' ,
        'quote':'Life is not a problem to be solved, but a reality to be experienced' 
      },
      {
        'author':' Socrates' ,
        'quote':'The unexamined life is not worth living' 
      },
]

function randomSelector(arrayLength){
    return Math.floor(Math.random()* arrayLength);
}

function generateQuote(){
    var randomNumber = randomSelector(arrayOfQuotes.length);
    document.getElementById('quoteOutput').innerHTML = '"'+ arrayOfQuotes[randomNumber].quote + '"';
    document.getElementById('authorOutput').innerHTML = '"'+ arrayOfQuotes[randomNumber].author+ '"';

}