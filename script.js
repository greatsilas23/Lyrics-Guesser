/*Date created: Sep 26, 2021 */
/*Date modified: Sep 26, 2021 */
//constants
const PrisonerLyricsSection = document.getElementById("prisoner_lyrics_section")
const SlaveLyricsSection = document.getElementById("slave_lyrics_section")
const SongsPopup = document.getElementById("songs_popup_section")
const ClueAnswerPopup = document.getElementById("song_long_answers")
const SlaveAnswerPopup = document.getElementById("lyrics_slave") 
const PrisonerAnswerPopup = document.getElementById("lyrics_prisoner")
const RecordsPopup = document.getElementById("my_records")
const OpaqueBackground = document.getElementById("opaque_background")
const GameScreenPopup = document.getElementById("game_screen_popup")
const Questions = document.getElementsByClassName("questions")
const QuestionOne = document.querySelector("div#question_one")
const QuestionTwo = document.querySelector("div#question_two")
const Answers = document.getElementsByClassName("answers")
//variables
let primary_popup_is_showing = false
let secondary_popup_is_showing = false
let game_is_running = false
let user_answer = document.getElementById("lyrics_answer")
let answer_is_correct = false
let game_popup_is_showing = false
let clue_is_showing = false
//check if lyrics are correct for Lucky Dube - Prisoner
function checkPrisonerAnswer(){
    let prisoner_correct_answer = `Somebody told me about it
    When I was still a little boy`
    if(user_answer.value === prisoner_correct_answer){
        answer_is_correct = true
        alert("Correct Answer")
    }
    else
        alert("correct answer is ", prisoner_correct_answer)
}

//show next question
function nextQn(){
    for(let i = 0; i < Questions.length; i++){
        Questions[i].classList.add("slide_left")
    }

}
//arrange elements
function arrQuestions(){
    let current_left_position = new Array()
    for(let k = 0; k <= (Questions.length)*800; k += 800)
        current_left_position.push(k)

    for(let i = 0; i <= Questions.length; i++){
        Questions[i].style.left = `${current_left_position[i]}px`
    }
}
//clear answers
function resetAnswers(){
    for(let i = 0; i < Answers.length; i++){
        Answers[i].clear()
    }
}
//populate lyrics answers
function AddLongAnswers(){
    SlaveLyricsSection.innerHTML = SlaveLyrics
    PrisonerLyricsSection.innerHTML = PrisonerLyrics
}
//check if lyrics are correct for Lucky Dube - Slave
// function checkSlaveAnswer(){
//     let prisoner_correct_answer = document.getElementById("slave_correct_answer").value
//     if(user_answer === prisoner_correct_answer){
//         answer_is_correct = true
//         alert("Correct Answer")
//     }
//     else
//         alert("correct answer is ", prisoner_correct_answer)
// }
//show a clue of the answer
function showClue()
{
    GameScreenPopup.style.display = "none"
    game_popup_is_showing = false
    SlaveLyricsSection.innerHTML = PrisonerLyrics
    ClueAnswerPopup.style.display = "block"
    clue_is_showing = true
}
//hide a clue of the answer
function hideClue()
{
    ClueAnswerPopup.style.display = "none"
    clue_is_showing = false
    GameScreenPopup.style.display = "block"
    game_popup_is_showing = true
}
//go to primary screen
function showPrimaryScreen(){ 
    hideOpaqueBackground() 
    hideSongsPopup()
    hideGamePopup()
}
// show game screen popup
function showGamePopup(){
    GameScreenPopup.style.display = "block"
    game_popup_is_showing = true   
}
function hideGamePopup(){
    GameScreenPopup.style.display = "none"
    game_popup_is_showing = false  
}
//start showing the game
function showGame(){
    game_is_running = true
    hideSongsPopup() 
    showGamePopup()
    showOpaqueBackground()
}
//stop showing the game
function hideGame(){
    game_is_running = false
    hideGamePopup()
    showSongsPopup() 
    showOpaqueBackground()
}
//show songs popup
function showSongsPopup(){
    SongsPopup.style.display = "block"
    primary_popup_is_showing = true
    showOpaqueBackground()
    secondary_popup_is_showing = true
}
//hide songs popup
function hideSongsPopup(){
    SongsPopup.style.display = "none"
    primary_popup_is_showing = false
    hideOpaqueBackground()
    secondary_popup_is_showing = true
}
//show opaque background
function showOpaqueBackground(){
    OpaqueBackground.style.display = "block"
    secondary_popup_is_showing = true
}
//hide opaque background
function hideOpaqueBackground(){
    OpaqueBackground.style.display = "none"
    secondary_popup_is_showing = false
}
//long answers
const PrisonerLyrics = `
Somebody told me about it
When I was still a little boy
He said to me, crime does not pay
He said to me, education is the key, yeah
As a little boy I thought I know
What I was doin', yeah man
But today, here I am in jail
I'm a prisoner (prisoner)
I am a prisoner (prisoner)
I am a prisoner (prisoner)
I looked all around me
But to see nothing
But four gray walls staring at me
The policeman said to me, son
They won't build no schools anymore
All they'll build will be prison, prison
They won't build no schools anymore
All they'll build will be prison, prison
They won't build no schools anymore
All they'll build will be prison, prison
'Cause today, yeah
I am a prisoner (prisoner)
I am a prisoner (prisoner)
I'm a prisoner, dear Lord (prisoner)
I asked the policeman and said
How much must I pay for my freedom?
He said to me, son
They won't build no schools anymore
They won't build no hospitals
They won't build no schools anymore
They won't build no hospitals
All they'll build will be prison, prison
All they'll build will be prison, prison
All they'll build will be prison, prison
All they'll build will be
I am a prisoner (prisoner)
I'm a prisoner, yes I am (prisoner)
I am a prisoner (prisoner)
I am a prisoner, God (prisoner)
I am a prisoner (prisoner)
I'm a prisoner (prisoner)`

const SlaveLyrics = `
Ministers of religion
Have visited me many times
To talk about it
They say to me
I gotta leave it I gotta leave it
It's a bad habit
For a man
But when I try to leave it
My friends keep telling me
I'm a fool amongst fools
[Chorus:]
Now I'm a slave, a slave
I'm a slave
I'm a liquor slave
I'm a slave, a slave, slave
I'm a slave
Just a liquor slave
I have lost my dignity
I had before trying
To please everybody
Some say to me
Yo yo
I look better when I'm drunk
Some say no no no
I look bad you know
Sometimes I cry
I cry but my crying
Never helps me none
[Chorus:]
''cause now I am a slave, a slave
I'm a slave
I'm just a liquor slave
I am a slave, a prisoner
I'm a slave
Just a liquor slave
Every night when I'm
Coming back home
My wife gets worried
''cause she knows
She's got double trouble
Coming home
Sometimes I cry
I cry lord I cry
But my crying
Never helps me
Chorus: (till fade)
`
