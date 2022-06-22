let quotesBox = document.getElementById("quotes")
document.getElementById("quotes-box").style.display = "none"
quotes = ['"You don’t have to control your thoughts. You just have to stop letting them control you."', 
'"There is a crack in everything, that’s how the light gets in."',
'"Deep breathing is our nervous system’s love language."',
'"I think it’s really important to take the stigma away from mental health… My brain and my heart are really important to me. I don’t know why I wouldn’t seek help to have those things be as healthy as my teeth."',
'"It is not the bruises on the body that hurt. It is the wounds of the heart and the scars on the mind."',
'"Mental health…is not a destination, but a process. It’s about how you drive, not where you’re going."',
'"Not until we are lost do we begin to understand ourselves."',
'"You are not your illness. You have an individual story to tell. You have a name, a history, a personality. Staying yourself is part of the battle."',
'"Happiness can be found even in the darkest of times, if one only remembers to turn on the light."',
'"Vulnerability sounds like truth and feels like courage. Truth and courage aren’t always comfortable, but they’re never weakness."',
'"Just because you don’t understand it doesn’t mean it isn’t so."',
'"Promise me you’ll always remember: You’re braver than you believe, and stronger than you seem, and smarter than you think."',
'"Just because no one else can heal or do your inner work for you doesn’t mean you can, should, or need to do it alone."',
'"There is hope, even when your brain tells you there isn’t."',
'"I cannot stand the words ‘Get over it’. All of us are under such pressure to put our problems in the past tense. Slow down. Don’t allow others to hurry your healing. It is a process, one that may take years, occasionally, even a lifetime – and that’s OK."',
'"Self-care is how you take your power back."',
'"My dark days made me strong. Or maybe I already was strong, and they made me prove it."',
'"There is no normal life that is free of pain. It’s the very wrestling with our problems that can be the impetus for our growth."',
'"‘Positive vibes only’ isn’t a thing. Humans have a wide range of emotions and that’s OK."',
'"You don’t have to be positive all the time. It’s perfectly okay to feel sad, angry, annoyed, frustrated, scared and anxious. Having feelings doesn’t make you a negative person. It makes you human."',
'"Nothing can dim the light that shines from within."',
'"You, yourself, as much as anybody in the entire universe, deserve your love and affection."',
'"This feeling will pass. The fear is real but the danger is not."',
'"Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor."',
'"Even if we don’t have the power to choose where we come from, we can still choose where we go from there."',
'"You are valuable just because you exist. Not because of what you do or what you have done, but simply because you are."',
'"There is no standard normal. Normal is subjective. There are seven billion versions of normal on this planet."',
'"Women have to take the time to focus on our mental health — take time for self, for the spiritual, without feeling guilty or selfish. The world will see you the way you see you, and treat you the way you treat yourself."',
'"The best way out is always through."',
'"We are not our trauma. We are not our brain chemistry. That’s part of who we are, but we’re so much more than that."',
'"Your mental health is everything – prioritize it. Make the time like your life depends on it, because it does." ',
'"If we start being honest about our pain, our anger, and our shortcomings instead of pretending they don’t exist, then maybe we’ll leave the world a better place than we found it."',
'"Mental health problems don’t define who you are. They are something you experience. You walk in the rain and you feel the rain, but you are not the rain."',
'"What mental health needs is more sunlight, more candor, and more unashamed conversation."',
'"Being able to be your true self is one of the strongest components of good mental health."',
'"Don’t judge each day by the harvest you reap but by the seeds that you plant."',
'"What mental health needs is more sunlight, more candor, and more unashamed conversation."',
'"Being able to be your true self is one of the strongest components of good mental health."',
'"Don’t judge each day by the harvest you reap but by the seeds that you plant."',
'"Sometimes the people around you won’t understand your journey. They don’t need to, it’s not for them."',
'"I am not afraid of storms for I am learning how to sail my ship."',
'"Sometimes self care is exercise and eating right. Sometimes it’s spending time with loved ones or taking a nap. And sometimes it’s watching an entire season of TV in one weekend while you lounge around in your pajamas. Whatever soothes your soul."',
'"The most beautiful people we have known are those who have known defeat, known suffering, known struggle, known loss, and have found their way out of the depths. These persons have an appreciation, a sensitivity, and an understanding of life that fills them with compassion, gentleness, and a deep loving concern. Beautiful people do not just happen."',
'"There is hope, even when your brain tells you there isn’t."',
'"The true definition of mental illness is when the majority of your time is spent in the past or future, but rarely living in the realism of NOW."',
'"Things not to say to someone with mental illness: Ignore it. Forget about it. Fight it. You are better than this. You are over thinking."',
'"Being able to be your true self is one of the strongest components of good mental health."',
'"All stress, anxiety, depression, is caused when we ignore who we are, and start living to please others."'
]

function getRandomQuote() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    quotesBox.textContent = randomQuote
    document.getElementById("quotes-box").style.display = ""
}

