import type { Virtue, UIStrings, Badge } from './types';
import { HeartBadgeIcon } from './components/icons/badges/HeartBadgeIcon';
import { ShieldBadgeIcon } from './components/icons/badges/ShieldBadgeIcon';
import { FlameBadgeIcon } from './components/icons/badges/FlameBadgeIcon';
import { PathBadgeIcon } from './components/icons/badges/PathBadgeIcon';


export const SUPPORTED_LANGUAGES = [
    { code: 'en', name: 'English' },
    { code: 'yo', name: 'Yoruba' },
    { code: 'ha', name: 'Hausa' },
    { code: 'ig', name: 'Igbo' }
];

export const BADGE_DEFINITIONS: Badge[] = [
  {
    id: 'heart-of-kindness',
    name: 'The Heart of Kindness',
    description: 'Awarded for mastering the virtues of caring and connection with others.',
    icon: HeartBadgeIcon,
    requiredVirtues: [3, 4, 5, 25, 26], // Kindness, Compassion, Consideration, Friendliness, Generosity
  },
  {
    id: 'shield-of-integrity',
    name: 'The Shield of Integrity',
    description: 'Awarded for mastering the virtues of truthfulness and reliability.',
    icon: ShieldBadgeIcon,
    requiredVirtues: [9, 11, 13, 19, 20], // Honesty, Honour, Justice, Loyalty, Reliability
  },
  {
    id: 'flame-of-courage',
    name: 'The Flame of Courage',
    description: 'Awarded for mastering the virtues of inner strength and determination.',
    icon: FlameBadgeIcon,
    requiredVirtues: [1, 23, 28], // Assertiveness, Perseverance, Courage
  },
  {
    id: 'path-of-wisdom',
    name: 'The Path of Wisdom',
    description: 'Awarded for mastering the virtues of balance and inner peace.',
    icon: PathBadgeIcon,
    requiredVirtues: [14, 15, 22, 24, 27], // Moderation, Patience, Peacefulness, Self-Discipline, Tolerance
  },
];

export const INITIAL_UI_STRINGS: UIStrings = {
  header: {
    weekDay: "Week {currentWeek} of {totalWeeks} • Day {currentDay} of {totalDays}",
    points: "Points",
    parentsCornerButton: "Parent's Corner",
    streak: "{count} Day Streak"
  },
  virtueCard: {
    day1Title: "Day 1: Virtue of the Week",
    parentNote: "Parent: Please help your child write this down to memorize and learn for the week.",
    stopReading: "Stop Reading",
    readAloud: "Read Aloud",
    completedButton: "Great Start!",
    startButton: "Let's Begin!"
  },
  quiz: {
    title: "Quiz Time: {virtueName}",
    correct: "Correct!",
    incorrect: "Not Quite!",
    correctAnswerWas: "The correct answer was: {letter}. {answer}"
  },
  activity: {
    stopListening: "Stop Listening",
    listen: "Listen",
    completedButton: "Completed!",
    doneButton: "Done!"
  },
  funcise: {
    title: "FunCise Time!",
    parentAppraisal: "Parent's Appraisal",
    completedButton: "FunCise Completed!",
    completeButton: "Complete FunCise"
  },
  summary: {
    wellDone: "Well Done!",
    completedWeek: "You have completed the week on",
    keepPracticing: "Keep practicing this virtue every day. You're building a great character!",
    nextWeekButton: "Start Next Week!"
  },
  completionScreen: {
      congratulations: "Congratulations!",
      completedProgram: "You have completed the 28-week Virtues Kit!",
      totalPoints: "Total Points: {points}"
  },
  navigation: "Navigation",
  translating: "Translating...",
  progressBarLabel: "Weekly progress",
  adjustPointsModal: {
    title: "Adjust Points",
    currentPoints: "Current Points",
    amountLabel: "Points to Adjust",
    reasonLabel: "Reason for adjustment (optional)",
    addPointsButton: "Add Points",
    deductPointsButton: "Deduct Points",
    closeButton: "Close",
    amountPlaceholder: "e.g., 10",
    reasonPlaceholder: "e.g., For helping with chores",
  },
  parentsCorner: {
    title: "Parent's Corner",
    closeButton: "Close",
    loadingText: "Loading tips...",
    errorText: "Sorry, we couldn't load the parenting tips. Please try again.",
    conversationStarters: "Conversation Starters",
    whyItMatters: "Why It Matters",
    practicalTips: "Practical Tips",
    pointsHistoryTitle: "Manual Points Log",
    noHistory: "No manual point adjustments have been made.",
    masteryTitle: "Virtue Mastery",
    badgesTitle: "Your Badges",
    noBadges: "Complete groups of virtues to earn badges!",
    exchangeRateTitle: "Point to Money Converter",
    currencySymbolLabel: "Currency Symbol",
    pointsPerCurrencyLabel: "Points per 1 {symbol}",
    currentValueLabel: "Current Value",
    saveRateButton: "Save Rate",
    tabTips: "Parenting Tips",
    tabProgress: "Child's Progress",
    tabShare: "Share & Win",
    shareAndWin: {
      title: "Share & Win!",
      instructionsTitle: "How to Enter:",
      step1: "1. Share a photo, video, or story of your child's progress on social media.",
      step2: "2. Include the hashtag #Mentor'sVirtuesKit in your post.",
      step3: "3. Paste the link to your public post below and submit!",
      copyLinkTip: "How to copy the link: Click on 'share' on your post, select 'Copy link', then paste it here.",
      selectionProcessTitle: "How Winners Are Selected:",
      selectionStep1: "• Monthly Prizes: Three prize winners are selected every month.",
      selectionStep2: "• Finalists: Our team reviews all entries and selects ten finalists.",
      selectionStep3: "• Live Event: Finalists are invited to a live video stream on the first Saturday of the next month.",
      selectionStep4: "• Virtue Quiz: In the presence of their parents, children answer questions about the virtues they've learned.",
      selectionStep5: "• Live Winners: Three winners are scored and announced live, with cash prizes transferred to the parent's account on the spot!",
      submissionTitle: "Submit Your Entry",
      urlPlaceholder: "https://... your social media post link",
      submitButton: "Submit Entry",
      submittedMessage: "Thank you! Your entry has been submitted.",
      winnersTitle: "Community Spotlight Winners",
      noWinners: "Winners will be announced soon. Keep sharing!",
      winnerPill: "Week {week} Winner",
      adminSubmissionsTitle: "Contest Submissions (Admin)",
      noSubmissions: "No submissions yet.",
      makeWinnerButton: "Select as Winner",
    },
  },
  badgeNotification: {
    title: "Badge Unlocked!",
    subtitle: "You've earned the",
    closeButton: "Awesome!",
  },
  offlineIndicator: {
    noConnection: "No internet connection.",
    someFeaturesUnavailable: "Some features may be unavailable.",
  },
};

export const VIRTUES_DATA: Virtue[] = [
  {
    id: 1,
    name: "Assertiveness",
    definition: "To be assertive means to be sure of what you believe and stand by it. You think and plan for yourself and believe you can do it. You do not accept any wrong opinion from anybody about your beliefs because you have thought deeply before believing and you understand and trust yourself. You know who you are and who you are not.",
    illustration: "VirtueIllustration_Assertiveness",
    quiz: [
      {
        question: "What does it mean to be assertive?",
        options: ["Being shy and quiet", "Being sure of your beliefs and standing by them", "Agreeing with everyone", "Ignoring others' opinions"],
        correctAnswerIndex: 1,
      },
      {
        question: "An assertive person...",
        options: ["Lets others make decisions for them", "Thinks and plans for themselves", "Never listens to anyone", "Is always loud"],
        correctAnswerIndex: 1,
      },
    ],
    activities: [
      {
        type: 'story',
        title: "Leo the Lion Finds His Roar",
        description: "Leo the little lion had a quiet roar and even quieter wishes. One sunny afternoon, his friends, a speedy cheetah and a bouncy zebra, wanted to play tag. 'Let's play tag!' they cheered. Leo really wanted to play with his new bouncy ball, but he just nodded and whispered, 'Okay.' He spent the whole game wishing he were playing catch. That evening, a wise old owl saw Leo looking sad. 'Leo,' hooted the owl, 'a true king knows his own heart and isn't afraid to share it.' The next day, when his friends suggested tag again, Leo took a deep breath. 'Tag is fun,' he said in a clear, friendly voice, 'but would you like to try my new bouncy ball with me first?' The cheetah and zebra looked at each other and smiled. 'Sure, Leo! That sounds great!' Leo learned that sharing his ideas didn't push his friends away—it brought them closer."
      },
      {
        type: 'drawing',
        title: "Superhero You!",
        description: "Imagine you are a superhero of assertiveness! Grab your crayons and draw yourself in a superhero costume. What's your special power? Maybe it's a 'Truth Shield' or a 'Confident Cape'! Share your drawing with your family."
      },
      {
        type: 'discussion',
        title: "Practice Power",
        description: "Let's act it out! With a family member, practice saying 'No, thank you' politely when you don't want something. Or, practice asking for your turn with a toy. Taking turns acting helps make it easier in real life!"
      }
    ],
    funcise: {
      title: "Voice Your Choice!",
      description: "Today's FunCise is about expressing your opinion respectfully. At dinner time, or when choosing a family activity, share what you would like to do and why. Remember to listen to others' ideas too!",
      parentAppraisalPrompt: "How well did your child express their opinion respectfully and confidently?",
    },
  },
  {
    id: 2,
    name: "Cleanliness",
    definition: "Cleanliness is the habit of keeping things tidy and free from dirt. It means taking care of your body, your clothes, your room, and your surroundings. Being clean helps you stay healthy and feel good about yourself.",
    illustration: "VirtueIllustration_Cleanliness",
    quiz: [
      {
        question: "What is cleanliness?",
        options: ["Making a mess", "Keeping things tidy and free from dirt", "Wearing dirty clothes", "Never taking a bath"],
        correctAnswerIndex: 1,
      },
      {
        question: "Why is being clean important?",
        options: ["It's not important", "It helps you stay healthy", "It makes your parents happy", "Both B and C are correct"],
        correctAnswerIndex: 3,
      },
    ],
     activities: [
      {
        type: 'story',
        title: "Squeaky the Squirrel's Tidy Tree",
        description: "Squeaky the Squirrel loved collecting things. His little home in the oak tree was filled with shiny pebbles, colorful leaves, and LOTS of acorn shells. It was so full that one day, he couldn't find his favorite treasure: a sparkly blue button! He searched everywhere, making an even bigger mess. 'I can't find it!' he cried. His friend, Beatrice the Badger, peeked inside. 'Oh my, Squeaky! A tidy home is a happy home,' she said gently. Together, they started to clean. They made a pile for trash, a box for pebbles, and a neat stack for leaves. At the very bottom of a pile of old nut shells, they found it—the sparkly blue button! Squeaky beamed. 'You were right, Beatrice! Now my home feels so cozy, and I know where all my favorite things are!'"
      },
      {
        type: 'drawing',
        title: "My Super-Tidy Space",
        description: "Get your art supplies! Draw a picture of your favorite space (like your bedroom or play area) when it is perfectly clean. Where does everything go? Show how neat and happy the room looks."
      },
      {
        type: 'discussion',
        title: "Cleanliness Chat",
        description: "Sit down with a parent and talk about why being clean is so good. Why do we wash hands? How does a clean room make you feel? Why is it important to put toys away after playing?"
      }
    ],
    funcise: {
      title: "Helping Hand Challenge",
      description: "For this FunCise, choose one task to help keep the house clean. You could help with the dishes after a meal, make your bed without being asked, or help tidy up the living room. Every little bit helps!",
      parentAppraisalPrompt: "How well did your child complete their cleaning task with a positive attitude?",
    },
  },
  {
    id: 3,
    name: "Kindness",
    definition: "Kindness is about being friendly, generous, and considerate to others. It means showing you care through your words and actions, without expecting anything in return. A small act of kindness can make a big difference in someone's day.",
    illustration: "VirtueIllustration_Kindness",
    quiz: [
      {
        question: "Kindness is about...",
        options: ["Being mean to others", "Being friendly, generous, and considerate", "Only thinking about yourself", "Expecting a reward for good deeds"],
        correctAnswerIndex: 1,
      },
      {
        question: "Which of these is an act of kindness?",
        options: ["Sharing your toys", "Saying something nice to a friend", "Helping someone who has fallen", "All of the above"],
        correctAnswerIndex: 3,
      },
    ],
    activities: [
      {
        type: 'story',
        title: "The Case of the Kindness Elf",
        description: "Lily the Rabbit was hopping home when she saw her friend, Timmy the Turtle, struggling. Timmy was trying to carry a big pile of juicy red berries, but his little leaf bag had a hole, and berries were tumbling out! A few other animals giggled and pointed. But Lily didn't. She remembered that kindness means helping when you can. She hopped over to Timmy and said, 'Don't worry, Timmy! I can help.' Lily carefully put the fallen berries into her own sturdy basket and helped Timmy carry them all the way to his home. Timmy was so thankful! The next day, when a big gust of wind blew Lily's favorite flower hat into a puddle, Timmy used his strong shell to shield it from the mud. They both learned that kindness is like a little seed that grows into a big, beautiful friendship."
      },
      {
        type: 'drawing',
        title: "The Kindness Tree",
        description: "Draw a big tree with lots of branches. On each leaf, draw or write one small act of kindness you can do this week. Maybe it's 'share my snack' or 'give a hug'. Hang it up where you can see it!"
      },
      {
        type: 'discussion',
        title: "Feeling Kind",
        description: "With a family member, talk about a time someone was very kind to you. How did it make your heart feel? Now, share a time you were kind to someone else. Did you feel good inside, too?"
      }
    ],
    funcise: {
      title: "Secret Kindness Mission",
      description: "Your mission, should you choose to accept it, is to do one secret act of kindness for a family member today. You could draw them a picture and leave it on their pillow, or do one of their chores for them without them knowing. Shhh, it's a secret!",
      parentAppraisalPrompt: "Did you notice the impact of your child's secret act of kindness?",
    }
  },
  {
    id: 4,
    name: "Compassion",
    definition: "Compassion is showing concern and care for others; it is putting yourself in other people's place. You forgive people easily when you have compassion for them. You are always helping those who need help. When you are compassionate, you are the person people come to and you listen to them.",
    illustration: "VirtueIllustration_Compassion",
    quiz: [
      {
        question: "What is compassion?",
        options: ["Ignoring people who need help", "Showing concern and care for others", "Only caring about yourself", "Never forgiving anyone"],
        correctAnswerIndex: 1,
      },
      {
        question: "A compassionate person is someone who...",
        options: ["Listens to people when they need to talk", "Is never there for their friends", "Avoids helping others", "Gives only to people who can give back"],
        correctAnswerIndex: 0,
      },
    ],
    activities: [
      {
        type: 'story',
        title: "The Little Bird with a Big Heart",
        description: "Pip was a small sparrow who saw a big, fluffy cat looking sad by the window. Other birds chirped, 'Stay away!' but Pip felt a tug in his heart. He flew down and chirped softly. The cat, named Patches, meowed that he missed his friend who had moved away. Pip listened to the whole story. Every day after that, Pip would visit Patches, telling him stories of the sky. He showed concern and care, and soon Patches started to purr again. Pip learned that compassion means listening and being a friend, even to someone very different from you."
      },
      {
        type: 'drawing',
        title: "A Picture of Caring",
        description: "Draw a picture of yourself helping someone in need. It could be a friend who is sad, a pet that is hungry, or a family member who needs a hug. Show what compassion looks like!"
      },
      {
        type: 'discussion',
        title: "Kind Heart Mirror",
        description: "Let's do the Mirror Challenge! Stand in front of a mirror with a parent and say, 'Because I have a kind heart, I will show compassion to the sick.' Talk about other ways you can show compassion to friends and family."
      }
    ],
    funcise: {
      title: "Helping Hand",
      description: "This week's FunCise is to show compassion! Do something kind for someone—a family member, a friend, or even a pet. At the end of the day, tell your parent who you helped and what you did.",
      parentAppraisalPrompt: "How well did your child demonstrate compassion this week?",
    },
  },
  {
    id: 5,
    name: "Consideration",
    definition: "Consideration is putting yourself in other people's place to see how they feel. It means treating others the way you want them to treat you. It is not always thinking of yourself alone in your decisions, but thinking of what effect your decision will have on others. When you are considerate, you think of what others like or don't like and you do things to make them happy.",
    illustration: "VirtueIllustration_Consideration",
    quiz: [
      {
        question: "What does it mean to be considerate?",
        options: ["Only thinking about yourself", "Doing whatever you want", "Putting yourself in other people's place to see how they feel", "Making others sad"],
        correctAnswerIndex: 2,
      },
      {
        question: "Being considerate means...",
        options: ["Treating others how you want to be treated", "Ignoring how your actions affect others", "Always getting your way", "Never sharing"],
        correctAnswerIndex: 0,
      },
    ],
    activities: [
      {
        type: 'story',
        title: "The Shared Swing",
        description: "Mia loved the big red swing at the park more than anything. She could swing on it all day! One afternoon, a little boy named Sam came and stood by the swing, looking sad. Mia wanted to keep swinging, but then she remembered what her mom said about consideration. She thought, 'How would I feel if I wanted a turn and couldn't get one?' She slowed down, hopped off, and said, 'Would you like a turn?' Sam's face lit up! They decided to take turns, counting to 100 for each other. They had more fun together than Mia ever had alone."
      },
      {
        type: 'drawing',
        title: "Two Happy Friends",
        description: "Draw a picture of two friends playing together. One is sharing their favorite toy with the other. Show the happy smiles on their faces. This is what consideration looks like!"
      },
      {
        type: 'discussion',
        title: "'What If?' Game",
        description: "Let's play a game with a parent! Ask 'What if your friend wanted to play a different game than you?' What would be the considerate thing to do? Talk about different ideas, like taking turns or finding a new game you both like."
      }
    ],
    funcise: {
      title: "Think of Others",
      description: "Today's FunCise is to practice consideration. When you are playing or talking with someone, stop and think: 'How would I feel if I were them?' Try to do one thing that you know will make them feel happy and respected.",
      parentAppraisalPrompt: "How well did your child show consideration for others' feelings?",
    },
  },
  {
    id: 6,
    name: "Enthusiasm",
    definition: "Enthusiasm is the plus factor that brings out the best in what you do. It is the feeling of joy and happiness towards everything you do. It is inspiring yourself with positive thoughts and having a positive outlook always.",
    illustration: "VirtueIllustration_Enthusiasm",
    quiz: [
      {
        question: "What is enthusiasm?",
        options: ["Feeling sad and bored", "The feeling of joy and happiness towards what you do", "Complaining about tasks", "Having negative thoughts"],
        correctAnswerIndex: 1,
      },
      {
        question: "When you are enthusiastic, you...",
        options: ["Have a positive outlook", "Do things with low energy", "Avoid trying new things", "Bring others down"],
        correctAnswerIndex: 0,
      },
    ],
    activities: [
      {
        type: 'story',
        title: "The Tidy-Up Dance Party",
        description: "It was time to clean up the playroom, and Leo groaned. 'This is so boring!' he said. His mom smiled and turned on some music. 'It's only boring if we let it be!' she said with a wiggle. 'Let's have a Tidy-Up Dance Party!' Leo giggled. They danced as they put the blocks away and sang as they stacked the books. Leo pretended he was a superhero with super-speed cleaning powers. The room was clean in no time, and they had so much fun. Leo learned that a little enthusiasm can turn any chore into a great game."
      },
      {
        type: 'drawing',
        title: "Joyful You!",
        description: "Draw a picture of yourself doing your favorite activity. Show the big smile on your face and all the energy you have! Draw sparkles and stars all around you to show your enthusiasm!"
      },
      {
        type: 'discussion',
        title: "Mirror of Joy",
        description: "Let's do the Mirror Challenge! Look in the mirror and say 'I am enthusiastic about...' and finish the sentence with something you're excited about today. Maybe it's going to school, playing outside, or helping with dinner!"
      }
    ],
    funcise: {
      title: "Cheerful Chore",
      description: "Today's FunCise is to show enthusiasm! Pick one chore or task you have to do, like putting your shoes away, and do it with a big smile and lots of energy. You can sing a song or do a little dance while you do it. Show your family how joyful you can be!",
      parentAppraisalPrompt: "How well did your child demonstrate enthusiasm while doing a task?",
    },
  },
  {
    id: 7,
    name: "Excellence",
    definition: "Excellence is bringing out the best in yourself and things. It is doing things perfectly and getting the best result. It is doing your best all the time.",
    illustration: "VirtueIllustration_Excellence",
    quiz: [
      {
        question: "What is excellence?",
        options: ["Doing things halfway", "Giving up easily", "Doing your best all the time to get the best result", "Not trying at all"],
        correctAnswerIndex: 2,
      },
      {
        question: "To achieve excellence means to...",
        options: ["Be perfect on the first try", "Bring out the best in yourself and things", "Do less than you can", "Compare yourself to others"],
        correctAnswerIndex: 1,
      },
    ],
    activities: [
      {
        type: 'story',
        title: "The Perfect Tower",
        description: "Ava loved building with her blocks. She wanted to build the tallest, most perfect tower ever. Her first try wobbled and fell. So did her second. She felt frustrated, but she remembered that excellence means doing your best. She looked at her blocks and started again, this time putting the biggest blocks on the bottom. She built slowly and carefully. It wasn't just about being fast; it was about being thoughtful. Finally, her tower stood tall and strong, reaching almost to the ceiling. It was the best tower she had ever built, not because it was perfect, but because she had given it her very best effort."
      },
      {
        type: 'drawing',
        title: "Your Best Work",
        description: "Think of something you want to be excellent at. It could be building with blocks, drawing, or riding your bike. Draw a picture of you doing that activity with your very best effort and concentration!"
      },
      {
        type: 'discussion',
        title: "One Step Better",
        description: "Let's talk about excellence! Pick one thing you want to get better at this week. What is one small step you can take today to practice and do your best? For example, if you want to write your name better, you could practice one letter."
      }
    ],
    funcise: {
      title: "Work at It",
      description: "For today's FunCise, choose one thing you want to excel at. Spend some time practicing and trying your very best. It's not about being perfect; it's about giving it your all! Show a parent what you accomplished.",
      parentAppraisalPrompt: "How well did your child show effort and try their best in their chosen activity?",
    }
  },
  {
    id: 8,
    name: "Forgiveness",
    definition: "Forgiveness is letting go of a hurt done to you by yourself or others. It is knowing that nobody is perfect and we all make mistakes because of our imperfection and releasing love to those who hurt you instead of fixing your mind on revenge. It is given people the second chance. When you forgive others you do good to yourself, unforgiving is a kind of virus that affects your mind and fills it with bitterness which can kill you. You forgive yourself also when you make mistakes by moving away from the mistake and doing things differently.",
    illustration: "VirtueIllustration_Forgiveness",
    quiz: [
      {
        question: "What is forgiveness?",
        options: ["Holding onto anger", "Letting go of a hurt done to you", "Getting revenge", "Never making mistakes"],
        correctAnswerIndex: 1,
      },
      {
        question: "When you forgive other people, you also...",
        options: ["Do good to yourself", "Show that you are weak", "Forget what happened", "Make them feel bad"],
        correctAnswerIndex: 0,
      },
    ],
    activities: [
      {
        type: 'discussion',
        title: "A Story of Forgiveness",
        description: "With a parent, share a story about a time when someone had to forgive. It can be a real story or from a book. Talk about how the person felt before and after forgiving. Why is it sometimes hard to forgive?",
      },
      {
        type: 'discussion',
        title: "Mirror of Forgiveness",
        description: "Look in the mirror and say positive things about yourself that are related to forgiveness. For example: 'I am a good friend because I forgive.' or 'I am strong because I can say sorry.' Practice saying these positive statements.",
      },
      {
        type: 'drawing',
        title: "Drawing Forgiveness",
        description: "Draw a picture of what forgiveness looks like to you. Maybe it's two friends hugging, or a dark cloud turning into a bright sun. Share your drawing and explain what it means."
      }
    ],
    funcise: {
      title: "Win My Love Challenge",
      description: "Today's FunCise is about showing love and earning goodwill. Come up with two special ways to show someone you care and want them to feel happy and loved. Share your ideas and actions with your parent.",
      parentAppraisalPrompt: "How thoughtfully did your child come up with and perform actions to show love and forgiveness?",
    },
  },
  {
    id: 9,
    name: "Honesty",
    definition: "Honesty is truthfulness, when you are honest you don't lie to yourself and others. Honesty makes people trust you, when you cultivate the habit of being honest all the time people will believe you all the time and they will be ready to stand for you when you are wrongly accused.",
    illustration: "VirtueIllustration_Honesty",
    quiz: [
      {
        question: "What is honesty?",
        options: ["Telling stories", "Truthfulness", "Keeping secrets", "Making people happy"],
        correctAnswerIndex: 1,
      },
      {
        question: "What is a major benefit of being honest?",
        options: ["You get more presents", "People will trust you", "You will never get in trouble", "You will be popular"],
        correctAnswerIndex: 1,
      },
    ],
    activities: [
      {
        type: 'story',
        title: "The Power of Truth",
        description: "Listen to a story from your parent about the benefits of being honest. It could be about a real person who was rewarded for their truthfulness. Discuss why honesty is a valuable quality.",
      },
      {
        type: 'discussion',
        title: "The Honest Mirror",
        description: "Talk about how a mirror is always honest. It shows you exactly what is there. Discuss how being honest like a mirror helps people and gives you peace of mind. Why is it better to know the truth?",
      },
      {
        type: 'drawing',
        title: "A Picture of Honesty",
        description: "Draw a picture that shows honesty. It could be someone returning something that was lost, or telling the truth about a broken vase. What does an honest face look like?",
      }
    ],
    funcise: {
      title: "Honesty Hour",
      description: "For today's FunCise, share a story with your parent about a time you chose to be honest, even if it was difficult. Talk about what happened and how it made you feel afterward.",
      parentAppraisalPrompt: "How well did your child reflect on their experience with honesty?",
    },
  },
  {
    id: 10,
    name: "Humility",
    definition: "Humility is when you do not think too highly of yourself, when you don't behave as if you are better than others but treat everyone with dignity and respect. It is knowing that you too are human who can make mistakes even if you do wonderful things. Humility makes you accept others and not discriminate or look down on anyone.",
    illustration: "VirtueIllustration_Humility",
    quiz: [
      {
        question: "Humility means...",
        options: ["Thinking you are the best", "Bragging about your accomplishments", "Treating everyone with dignity and respect", "Ignoring other people"],
        correctAnswerIndex: 2,
      },
      {
        question: "What does humility help you do?",
        options: ["Win every game", "Make more money", "Accept others and not discriminate", "Be the boss"],
        correctAnswerIndex: 2,
      },
    ],
    activities: [
      {
        type: 'discussion',
        title: "We're Not Perfect",
        description: "Everyone has flaws, and that's okay! Have a conversation with your parent about something they are not perfect at. This shows that everyone makes mistakes and it's humble to admit it.",
      },
      {
        type: 'discussion',
        title: "Good at Being Me",
        description: "Practice humility by recognizing your strengths and weaknesses. Think of something you're not the best at, but follow it up with something you are great at! For example: 'I may not be the fastest runner, but I am a very kind friend.'",
      },
      {
        type: 'drawing',
        title: "Lifting Others Up",
        description: "Humility is about not putting yourself above others. Draw a picture of people helping each other and treating everyone as equals. You could draw friends on a see-saw, perfectly balanced.",
      }
    ],
    funcise: {
      title: "Humble Highlights",
      description: "Share with your parent a specific time this week when you showed humility. Maybe you admitted a mistake, or you let someone else go first. Talk about the experience and how it felt.",
      parentAppraisalPrompt: "How well did your child identify and share an act of humility?",
    },
  },
  {
    id: 11,
    name: "Honour",
    definition: "When you have honour you are honourable, people respect you because you always stand by good values. When you have honour you respect yourself and others. Honour makes you keep to your words and never go back on what is right and good. Honour is the way to integrity and uprightness.",
    illustration: "VirtueIllustration_Honour",
    quiz: [
      {
        question: "Having honour means...",
        options: ["You are famous", "You have a lot of things", "You always stand by good values", "You never make mistakes"],
        correctAnswerIndex: 2,
      },
      {
        question: "What does honour make you do?",
        options: ["Break your promises", "Change your mind often", "Keep to your words", "Only think of yourself"],
        correctAnswerIndex: 2,
      },
    ],
    activities: [
      {
        type: 'discussion',
        title: "Keeping a Promise",
        description: "Honour is about keeping your word. Talk with your parent about a promise. It could be a promise they made, or one you can make, like 'I promise to clean my toys.' Discuss how fulfilling promises shows honour.",
      },
      {
        type: 'drawing',
        title: "Medal of Honour",
        description: "Think of someone you honour and respect. Draw a special medal for them. What shape will it be? What colors will you use? On the medal, write one word that describes why you honour them.",
      },
      {
        type: 'story',
        title: "The Knight's Code",
        description: "Listen to a story about a brave knight or a noble queen who lived with a code of honour. They always kept their promises, protected the innocent, and stood for what was right. What can we learn from them?",
      }
    ],
    funcise: {
      title: "Honour Ceremony",
      description: "Choose one person to honour this week. Make them a card, a small gift, or prepare a special 'thank you' speech for them. Tell them why you honour and appreciate them. Present it to them as a special ceremony.",
      parentAppraisalPrompt: "How well did your child express honour and appreciation for someone?",
    },
  },
  {
    id: 12,
    name: "Joyfulness",
    definition: "Joyfulness is freedom of the mind to be happy without minding the things going on in your life or around you. You choose to be happy because you are alive and have the right to be here.",
    illustration: "VirtueIllustration_Joyfulness",
    quiz: [
      {
        question: "What is joyfulness?",
        options: ["Getting new toys", "Freedom of the mind to be happy", "Eating candy", "Watching TV"],
        correctAnswerIndex: 1,
      },
      {
        question: "You can choose to be happy because...",
        options: ["Everything is perfect", "You are alive and have the right to be here", "You always get what you want", "It's your birthday"],
        correctAnswerIndex: 1,
      },
    ],
    activities: [
      {
        type: 'story',
        title: "Finding Joy in Tough Times",
        description: "Listen to a story from your parent about finding joy even when things are difficult. Talk about how being grateful for small things, like a sunny day or a good meal, can bring joy to our hearts.",
      },
      {
        type: 'discussion',
        title: "Sarah's Joy",
        description: "Let's talk about a story: 'Sarah's eyes sparkled with joy as she held her newborn baby girl, marveling at the miracle of life and the boundless love she felt in her heart.' What was Sarah joyful for? What are some things in your life that are miracles to be joyful for?",
      },
      {
        type: 'drawing',
        title: "Draw Your Joy",
        description: "What does joy look like to you? Is it a bright yellow sun, a dancing person, or a big smile? Draw a picture of what joyfulness feels like. Use the brightest, happiest colors you have!",
      }
    ],
    funcise: {
      title: "Joyful Moments",
      description: "Share a story with your parent about a moment this week that brought you joy. What happened? Who were you with? How did it feel? Reflecting on joyful moments helps us feel even happier!",
      parentAppraisalPrompt: "How well did your child recall and share their joyful experience?",
    },
  },
  {
    id: 13,
    name: "Justice",
    definition: "Practicing justice is being fair. It is solving problems so everyone wins. You don't prejudge. You see people as individuals. You don't accept it when someone acts like a bully, cheats or lies. Being a champion for justice takes courage. Sometimes when you stand for justice, you stand alone.",
    illustration: "VirtueIllustration_Justice",
    quiz: [
      {
        question: "Practicing justice is being...",
        options: ["The winner", "The boss", "Fair", "Quiet"],
        correctAnswerIndex: 2,
      },
      {
        question: "Being a champion for justice takes...",
        options: ["A lot of money", "A loud voice", "Courage", "A superhero costume"],
        correctAnswerIndex: 2,
      },
    ],
    activities: [
      {
        type: 'discussion',
        title: "Being Fair",
        description: "Talk with your parent about a time they had to be fair between two people. What did they do to make sure they heard both sides of the story? Why is it important to listen to everyone to practice justice?",
      },
      {
        type: 'story',
        title: "The Last Ice Cream",
        description: "Let's solve a puzzle of justice! 'Dennis and Roland are hurrying to the ice cream stand, but there is only one ice cream left. Dennis packed some lunch for school but Roland has no lunch.' Who should get the ice cream? Discuss your reasons with your parent.",
      },
      {
        type: 'drawing',
        title: "The Scales of Justice",
        description: "A symbol for justice is a scale that is perfectly balanced. Draw your own scales of justice. On each side of the scale, draw pictures of things that are fair, like 'sharing toys' or 'taking turns'.",
      }
    ],
    funcise: {
      title: "Justice Detective",
      description: "Be a detective! Think of a story you know or a situation you've seen (in real life or a cartoon) where someone was not treated fairly. Tell your parent what happened and what would have been the just and fair thing to do.",
      parentAppraisalPrompt: "How well did your child identify injustice and suggest a fair solution?",
    },
  },
  {
    id: 14,
    name: "Moderation",
    definition: "Moderation is creating a healthy balance in your life between work and play, rest and exercise. You don't overdo or get swept away by the things you like. You use your self-discipline to take charge of your life and your time.",
    illustration: "VirtueIllustration_Moderation",
    quiz: [
        {
            question: "Moderation is about creating a...",
            options: ["Strict schedule", "Healthy balance", "Life of all play", "Life of all work"],
            correctAnswerIndex: 1,
        },
        {
            question: "To practice moderation, you need to use your...",
            options: ["Imagination", "Loudest voice", "Self-discipline", "Energy"],
            correctAnswerIndex: 2,
        },
    ],
    activities: [
        {
            type: 'story',
            title: "Model Challenge",
            description: "Your parent should tell a story of how being moderate has helped them in life. For example, 'I learned that moderation brings balance and allows me to enjoy treats without compromising my well-being.'",
        },
        {
            type: 'discussion',
            title: "Work At It Challenge",
            description: "Let's check our lives for balance. Is there anything you do too much of, like eating sweets or playing video games? Let's work on bringing moderation to one of those things this week.",
        },
        {
            type: 'drawing',
            title: "Detective Challenge",
            description: "Be a detective at home! Look for places where moderation is needed. Maybe the toy box is overflowing or there are too many snacks on the counter. Draw a picture of how you can bring balance.",
        }
    ],
    funcise: {
        title: "Detective Challenge",
        description: "Today's FunCise is to be a moderation detective! Find one area in your home where moderation is needed. Talk to your parent about your findings and suggest a way to create more balance.",
        parentAppraisalPrompt: "How well did your child identify a need for moderation at home?",
    },
  },
  {
    id: 15,
    name: "Patience",
    definition: "Patience is quiet hope and trust that things will turn out right. You wait without complaining. You are tolerant and accepting of difficulties and mistakes. You picture the end in the beginning and persevere to meet your goals. Patience is a commitment to the future.",
    illustration: "VirtueIllustration_Patience",
    quiz: [
        {
            question: "What is patience?",
            options: ["Complaining while you wait", "Quiet hope and trust that things will turn out right", "Giving up when things are hard", "Ignoring mistakes"],
            correctAnswerIndex: 1
        },
        {
            question: "A patient person is...",
            options: ["Tolerant and accepting of difficulties", "Always in a hurry", "Never makes plans for the future", "Quick to get angry"],
            correctAnswerIndex: 0
        },
    ],
    activities: [
        {
            type: 'story',
            title: "The Waiting Seed",
            description: "Parent should share a story about a time they had to wait for something important, like waiting for a plant to grow or saving up for a special toy. Discuss how it felt to wait and the joy when the goal was reached."
        },
        {
            type: 'discussion',
            title: "Mirror Challenge",
            description: "Let's practice patience together. Find a quiet spot, close your eyes, and take three deep breaths. With each breath, imagine yourself growing stronger and more patient. Remember, patience is like a seed that blossoms into great rewards."
        },
        {
            type: 'drawing',
            title: "Draw Your Wait",
            description: "Think of something you are waiting for. It could be a birthday, a holiday, or a visit from a friend. Draw a picture of it. Then, draw yourself waiting happily and patiently. What can you do while you wait?"
        }
    ],
    funcise: {
        title: "Detective Challenge",
        description: "Let's be detectives! Watch a part of your favorite cartoon or movie today. Try to find a moment where a character shows patience, or a moment where a character is impatient. Tell your parent what you found!",
        parentAppraisalPrompt: "How well did your child identify a scenario showing patience or impatience?",
    },
  },
  {
      id: 16,
      name: "Orderliness",
      definition: "Orderliness is being neat and living with a sense of harmony. You are organized, and you know where things are when you need them. Solve problems step by step instead of going in circles. Order around you creates order inside you. It gives you peace of mind.",
      illustration: "VirtueIllustration_Orderliness",
      quiz: [
          {
              question: "What is a benefit of orderliness?",
              options: ["It makes you tired", "It gives you peace of mind", "It makes it hard to find things", "It creates confusion"],
              correctAnswerIndex: 1
          },
          {
              question: "Being orderly means you...",
              options: ["Solve problems step by step", "Leave your toys everywhere", "Are messy", "Go in circles"],
              correctAnswerIndex: 0
          },
      ],
      activities: [
          {
              type: 'story',
              title: "Model Challenge",
              description: "Your parent should show you what they do to make sure the house runs smoothly, like organizing things or making sure groceries are bought on time. They can explain what would go wrong if things were not done in an orderly way."
          },
          {
              type: 'discussion',
              title: "Work at It Challenge",
              description: "Let's make a daily routine! Write down the tasks you need to do in order, like waking up, brushing teeth, eating, and packing your school bag. Paste it on a wall and try to follow it every day."
          },
          {
              type: 'drawing',
              title: "Detective Challenge",
              description: "Think about the lifecycle of a butterfly: caterpillar, pupa, then butterfly. Draw the stages in order. What would happen if one of the stages was missed? This shows why order is important."
          }
      ],
      funcise: {
          title: "Detective Challenge",
          description: "Today, let's be detectives and learn about order! Talk with your parent about the lifecycle of a butterfly. What would happen if a stage was missed? This helps us understand why doing things in the right order is important.",
          parentAppraisalPrompt: "How well did your child understand the importance of order using the butterfly example?",
      },
  },
  {
      id: 17,
      name: "Curiosity",
      definition: "Curiosity is the willingness and ability to explore, arising from a sense of wonder and thirst for knowledge. It manifests in a child as tinkering with anything he or she sees, and when old enough to speak, asking many many questions.",
      illustration: "VirtueIllustration_Curiosity",
      quiz: [
          {
              question: "What is curiosity?",
              options: ["Being bored", "A willingness to explore and ask questions", "Not wanting to learn", "Staying quiet"],
              correctAnswerIndex: 1
          },
          {
              question: "How does a curious child act?",
              options: ["They tinker with things and ask questions", "They avoid new things", "They don't pay attention", "They only play with one toy"],
              correctAnswerIndex: 0
          },
      ],
      activities: [
          {
              type: 'discussion',
              title: "Model Challenge",
              description: "Pick a subject you are curious about, like space, oceans, or birds. With your parent, find out three interesting things about it. Your parent can show you how to find information and learn."
          },
          {
              type: 'story',
              title: "Work at It Challenge",
              description: "Choose a topic you're curious about. Each day for a few days, find out 3 new things about it. By the end, you will be a little expert on the subject! Share what you learn with your family."
          },
          {
              type: 'drawing',
              title: "Discovery Challenge",
              description: "Let's go on an adventure! Visit a place you've never been before, like a farm, a market, or a new park. Draw a picture of the most interesting thing you discovered there."
          }
      ],
      funcise: {
          title: "Discovery Challenge",
          description: "Today, go somewhere new with your parent, even if it's just a different park or a new aisle in the grocery store. Look for things you've never noticed before. What new thing did you discover? Tell your parent all about it!",
          parentAppraisalPrompt: "How well did your child show curiosity and share their new discovery?",
      },
  },
  {
      id: 18,
      name: "Communication",
      definition: "Communication is an ability to express one's thoughts and ideas in an unambiguous and effective way that will not hurt others or present yourself in a bad light. It is saying what you want to say the best way others can understand it without them feeling hurtful or painting yourself as a bad person.",
      illustration: "VirtueIllustration_Communication",
      quiz: [
          {
              question: "Good communication means...",
              options: ["Shouting to be heard", "Expressing your ideas without hurting others", "Keeping all your thoughts to yourself", "Always agreeing with others"],
              correctAnswerIndex: 1
          },
          {
              question: "The goal of communication is to...",
              options: ["Win an argument", "Say what you want in a way others can understand", "Make people feel bad", "Confuse people"],
              correctAnswerIndex: 1
          },
      ],
      activities: [
          {
              type: 'story',
              title: "Model Challenge",
              description: "Your parent can model good communication by picking a topic about themselves (like their job or a dream they have) and talking to you about it, like saying 'I have always wanted to be a scientist...'"
          },
          {
              type: 'discussion',
              title: "Work at It Challenge",
              description: "Have a 'time out' with a parent to discuss a family situation. You should be encouraged to voice your opinion and make suggestions respectfully."
          },
          {
              type: 'drawing',
              title: "Discovery Challenge",
              description: "Think of a cartoon or movie where a character didn't speak up and it caused a problem. Draw that scene. Talk with your parent about how good communication could have fixed it."
          }
      ],
      funcise: {
          title: "Discovery Challenge",
          description: "Be a communication detective! In a cartoon or story, find a time when communication was ineffective—maybe a character didn't speak up or was misunderstood. Tell your parent what happened and how better communication could have helped.",
          parentAppraisalPrompt: "How well did your child identify a scenario with ineffective communication?",
      },
  },
  {
      id: 19,
      name: "Loyalty",
      definition: "Loyalty is staying true to someone. It is standing up for something you believe in without wavering. It is being faithful to your family, country, school, friends or ideals, when the going gets tough as well as when things are good. With loyalty, you build relationships that last forever.",
      illustration: "VirtueIllustration_Loyalty",
      quiz: [
          {
              question: "What is loyalty?",
              options: ["Changing your mind all the time", "Only being a friend when things are easy", "Staying true to someone and your beliefs", "Telling secrets"],
              correctAnswerIndex: 2
          },
          {
              question: "Loyalty helps you...",
              options: ["Build relationships that last forever", "Win every game", "Get more toys", "Be popular"],
              correctAnswerIndex: 0
          },
      ],
      activities: [
          {
              type: 'story',
              title: "Model Challenge",
              description: "Your parent should narrate a story where they were loyal to someone. They can point out the key parts of loyalty, like honesty and support."
          },
          {
              type: 'discussion',
              title: "Game Challenge",
              description: "Let's play 'Spot the Loyals!' Your parent will present you with a scenario from a story. You have to figure out who is being loyal and who is not."
          },
          {
              type: 'drawing',
              title: "Appreciation",
              description: "Think of someone who has been a loyal friend to you. Draw a picture of you and your friend together. You could even make it into a card to thank them for being loyal."
          }
      ],
      funcise: {
          title: "Appreciation",
          description: "Show your appreciation for loyalty! Think of one person you were loyal to this week, or who was loyal to you. Tell your parent what happened. Being loyal is a wonderful way to be a good friend.",
          parentAppraisalPrompt: "Did your child understand and appreciate an act of loyalty this week?",
      },
  },
  {
      id: 20,
      name: "Reliability",
      definition: "Reliability means that others can depend on you. You keep your commitments and give your best to every job. You are responsible. You don't forget, and you don't need to be reminded. Other people can relax knowing things are in your reliable hands.",
      illustration: "VirtueIllustration_Reliability",
      quiz: [
          {
              question: "What does reliability mean?",
              options: ["Forgetting your promises", "That others can depend on you", "Needing lots of reminders", "Doing a lazy job"],
              correctAnswerIndex: 1
          },
          {
              question: "A reliable person is...",
              options: ["Someone who is responsible and keeps commitments", "Someone who always says 'no'", "Someone you can't trust", "Someone who needs to be reminded"],
              correctAnswerIndex: 0
          },
      ],
      activities: [
          {
              type: 'story',
              title: "Model Challenge",
              description: "Your parent can point out something they ALWAYS do for you, like making breakfast or helping with homework. They can emphasize that you don't need to remind them, because they are reliable."
          },
          {
              type: 'discussion',
              title: "Work at It Challenge",
              description: "Think of three ways you can be reliable. For example, as a student (doing homework), as a son/daughter (cleaning your room), or as a friend (keeping a promise). Talk about your ideas with your parent."
          },
          {
              type: 'drawing',
              title: "Detective Challenge",
              description: "Think of someone who needs help this week. Draw a picture of you helping them by being reliable. What can you do that they can count on?"
          }
      ],
      funcise: {
          title: "Detective Challenge",
          description: "Let's be reliability detectives! Your mission is to help someone by being reliable this week. It could be helping a parent with a chore or keeping a promise to a friend. Tell your parent how you were reliable.",
          parentAppraisalPrompt: "How well did your child complete their task to be reliable for someone?",
      },
  },
  {
      id: 21,
      name: "Respect",
      definition: "We show respect by speaking and acting with courtesy. We treat others with dignity and honor the rules of our family, school and nation. Respect yourself, and others will respect you.",
      illustration: "VirtueIllustration_Respect",
      quiz: [
          {
              question: "How do we show respect?",
              options: ["By being rude", "By speaking and acting with courtesy", "By breaking the rules", "By ignoring people"],
              correctAnswerIndex: 1
          },
          {
              question: "Respecting yourself means...",
              options: ["Others will respect you too", "You are better than others", "You don't need to respect anyone else", "You can do whatever you want"],
              correctAnswerIndex: 0
          },
      ],
      activities: [
          {
              type: 'story',
              title: "Model Challenge",
              description: "Your parent can show humility (a part of respect) by talking about something they're not perfect at, showing that it's okay to have flaws and we shouldn't try to look better than others."
          },
          {
              type: 'discussion',
              title: "Work at It Challenge",
              description: "Pick one respectful statement to practice, like 'I will listen when others are talking.' Throughout the day, try to keep that promise and then tell your parent how you did."
          },
          {
              type: 'drawing',
              title: "Detective Challenge",
              description: "Think of a cartoon or movie where a character was respectful or disrespectful. Draw the scene and talk about what happened and why their actions showed respect (or a lack of it)."
          }
      ],
      funcise: {
          title: "Detective Challenge",
          description: "Be a respect detective! In a cartoon, movie, or real life, find a scenario where someone was respectful or disrespectful. Tell your parent what you saw and why it was an example of respect (or not).",
          parentAppraisalPrompt: "How well did your child identify a scenario demonstrating respect or disrespect?",
      },
  },
  {
      id: 22,
      name: "Peacefulness",
      definition: "Peacefulness is being calm inside. Take time for daily reflection and gratitude. Solve conflicts so everyone wins. Be a peacemaker. Peace is giving up the love of power for the power of love. Peace in the world begins with peace in your heart.",
      illustration: "VirtueIllustration_Peacefulness",
      quiz: [
          {
              question: "What is peacefulness?",
              options: ["Being loud and angry", "Being calm inside", "Always wanting to be in charge", "Starting arguments"],
              correctAnswerIndex: 1
          },
          {
              question: "A peacemaker is someone who...",
              options: ["Likes to fight", "Solves conflicts so everyone wins", "Always agrees with the strongest person", "Ignores problems"],
              correctAnswerIndex: 1
          },
      ],
      activities: [
          {
              type: 'story',
              title: "Model Challenge",
              description: "Your parent should tell a story about a time they did NOT handle a situation peacefully and how it didn't work. Then, they should explain how being peaceful would have helped instead."
          },
          {
              type: 'discussion',
              title: "Work at It Challenge",
              description: "Let's be peaceful! Each day, pick one person (like Mommy, Daddy, or a sibling) and write down three things you can do to live peacefully with them. Try to do them!"
          },
          {
              type: 'drawing',
              title: "Detective Challenge",
              description: "Draw a picture of what a peaceful place looks like to you. Is it a quiet forest, a calm beach, or your cozy bed? Share your drawing and talk about why it feels peaceful."
          }
      ],
      funcise: {
          title: "Detective Challenge",
          description: "Today, your parent will praise you for living peacefully. Think about a time you were calm and peaceful. What did you do? Being peaceful is a superpower!",
          parentAppraisalPrompt: "Did you get a chance to praise your child for being peaceful today?",
      },
  },
  {
      id: 23,
      name: "Perseverance",
      definition: "Perseverance is being steadfast and persistent. You commit to your goals and overcome obstacles, no matter how long it takes. When you persevere, you don't give up...you keep going. Like a strong ship in a storm, you don't become battered or blown off course. You just ride the waves.",
      illustration: "VirtueIllustration_Perseverance",
      quiz: [
          {
              question: "What does perseverance mean?",
              options: ["Giving up when something is hard", "Being steadfast and persistent", "Avoiding challenges", "Complaining about obstacles"],
              correctAnswerIndex: 1
          },
          {
              question: "When you persevere, you...",
              options: ["Keep going, even when it's tough", "Let storms blow you off course", "Only do easy things", "Ask someone else to do it"],
              correctAnswerIndex: 0
          },
      ],
      activities: [
          {
              type: 'story',
              title: "Model Challenge",
              description: "Does your parent have a real-life story about perseverance? If not, read the story card about Moji, the blind girl who learned to play the piano through hard work and not giving up."
          },
          {
              type: 'discussion',
              title: "Game Challenge",
              description: "Let's play 'Spot the Virtue!' Your parent will tell you a story or scenario (like the ones about Edem & Taye or Amina). You have to decide if the characters showed perseverance."
          },
          {
              type: 'drawing',
              title: "Detective Challenge",
              description: "Think of a time you could have persevered but didn't. Draw what happened. Now, draw another picture showing what could have happened if you had kept trying!"
          }
      ],
      funcise: {
          title: "Detective Challenge",
          description: "Be a perseverance detective! Think of one thing in your own life where you could have tried harder or not given up. What was it? Talk with your parent about how you can show perseverance next time.",
          parentAppraisalPrompt: "How well did your child identify a personal scenario for perseverance?",
      },
  },
  {
      id: 24,
      name: "Self-Discipline",
      definition: "Self-discipline means self-control. It is doing what you really want to do, rather than being tossed around by your feelings like a leaf in the wind. You act instead of react. You get things done in an orderly and efficient way. With self-discipline, you take charge of yourself.",
      illustration: "VirtueIllustration_SelfDiscipline",
      quiz: [
          {
              question: "Self-discipline is another word for...",
              options: ["Being lazy", "Self-control", "Following your feelings everywhere", "Reacting without thinking"],
              correctAnswerIndex: 1
          },
          {
              question: "With self-discipline, you can...",
              options: ["Get things done in an orderly way", "Let your feelings control you", "Avoid all your work", "Make a mess"],
              correctAnswerIndex: 0
          },
      ],
      activities: [
          {
              type: 'story',
              title: "Model Challenge",
              description: "Your parent can tell you about their own experience with self-discipline, like with work, chores, or making sure homework is done. Or, you can read the story about Idara the gymnast."
          },
          {
              type: 'discussion',
              title: "Game Challenge",
              description: "Let's make a plan! Write down what you can do to improve your self-discipline in areas like cleanliness, doing homework, or taking care of siblings."
          },
          {
              type: 'drawing',
              title: "Detective Challenge",
              description: "Think of a cartoon or movie where a character showed great self-discipline (or none at all!). Draw the scene and explain to your parent what happened."
          }
      ],
      funcise: {
          title: "Detective Challenge",
          description: "Be a self-discipline detective! Watch a cartoon or movie and find a character who showed self-discipline, or one who didn't. Tell your parent what you found and what the character did.",
          parentAppraisalPrompt: "How well did your child identify an example of self-discipline?",
      },
  },
  {
      id: 25,
      name: "Friendliness",
      definition: "Friendliness is being a friend, through good times and bad. You take an interest in other people and make them feel welcome. You share your belongings, your time and yourself. Friendliness is the best cure for loneliness.",
      illustration: "VirtueIllustration_Friendliness",
      quiz: [
          {
              question: "What is friendliness?",
              options: ["Ignoring new people", "Being a friend through good times and bad", "Keeping all your toys to yourself", "Only talking to people you know"],
              correctAnswerIndex: 1
          },
          {
              question: "A friendly person...",
              options: ["Makes people feel welcome", "Doesn't share", "Is not interested in others", "Likes to be alone"],
              correctAnswerIndex: 0
          },
      ],
      activities: [
          {
              type: 'story',
              title: "Model Challenge",
              description: "Your parent can show you what friendliness looks like by being welcoming to someone new, making them feel relaxed and at home. It's about showing you care."
          },
          {
              type: 'discussion',
              title: "Helping Hand Challenge",
              description: "Let's practice friendliness! Pick two people, one at home and one at school, that you can show extra friendliness to. Check in with your parent about what you did to make them feel welcome."
          },
          {
              type: 'drawing',
              title: "Thank You!",
              description: "Think of the people who are friendly to you. Draw a picture of them and you together, with big smiles on your faces. Friendliness brings smiles!"
          }
      ],
      funcise: {
          title: "Thank You!",
          description: "Today, let's appreciate friendliness! Your parent should praise you for being friendly and bringing a smile to people's faces. Think of one person you were friendly to this week. How did it make them feel?",
          parentAppraisalPrompt: "Did you get a chance to praise your child for showing friendliness?",
      },
  },
  {
      id: 26,
      name: "Generosity",
      definition: "Generosity is giving and sharing. You share freely, not with the idea of receiving something in return. You find ways to give others happiness, and give just for the joy of giving. Generosity is one of the best ways to show love and friendship.",
      illustration: "VirtueIllustration_Generosity",
      quiz: [
          {
              question: "What is generosity?",
              options: ["Giving things to get something back", "Giving and sharing freely", "Keeping everything for yourself", "Only sharing with family"],
              correctAnswerIndex: 1
          },
          {
              question: "Why do we practice generosity?",
              options: ["To show off", "To get presents", "For the joy of giving and to show love", "Because we have to"],
              correctAnswerIndex: 2
          },
      ],
      activities: [
          {
              type: 'story',
              title: "Model Challenge",
              description: "Generosity is about giving time, effort, or gifts without expecting anything back. Your parent can demonstrate this or tell a story about being generous to someone who could never give back."
          },
          {
              type: 'discussion',
              title: "Game Challenge",
              description: "Let's play 'Spot the Virtue!' Your parent will tell you a story or scenario, and you have to decide if the characters are being generous."
          },
          {
              type: 'drawing',
              title: "Helping Hand Challenge",
              description: "Think of one person you can be generous to. Draw a picture of you sharing or helping them. What could you give them? A toy, your time, or a helping hand?"
          }
      ],
      funcise: {
          title: "Helping Hand Challenge",
          description: "Be a generous helper! Identify one person you can be generous to this week. With your parent's help, decide what you can give them. It could be a toy, some of your time, or a special drawing. Then, do it!",
          parentAppraisalPrompt: "How did your child show generosity this week?",
      },
  },
  {
      id: 27,
      name: "Tolerance",
      definition: "Being tolerant is accepting differences. You don't expect others to think, look, speak or act just like you. You are free of prejudice, knowing that all people have feelings, needs, hopes and dreams. Tolerance is also accepting things you wish were different with patience and flexibility.",
      illustration: "VirtueIllustration_Tolerance",
      quiz: [
          {
              question: "What does being tolerant mean?",
              options: ["Wanting everyone to be like you", "Accepting differences in others", "Making fun of people who are different", "Ignoring people"],
              correctAnswerIndex: 1
          },
          {
              question: "A tolerant person knows that...",
              options: ["Their way is the only way", "Everyone should think the same", "All people have feelings, needs, hopes and dreams", "Differences are bad"],
              correctAnswerIndex: 2
          },
      ],
      activities: [
          {
              type: 'story',
              title: "Model Challenge",
              description: "Tolerance is about accepting people's differences. Your parent can tell a story about how they showed tolerance at work, in the market, or at home."
          },
          {
              type: 'discussion',
              title: "Work at It Challenge",
              description: "Let's practice tolerance. Identify someone you know who is different from you. Say three things that make them different. Now, think of ways you can get along without needing to be the same."
          },
          {
              type: 'drawing',
              title: "Thank You!!!",
              description: "Draw a picture of you and a friend who is different from you. Show how you can have fun together even if you don't look or act the same. Tolerance helps build great friendships!"
          }
      ],
      funcise: {
          title: "Thank You!!!",
          description: "Let's celebrate tolerance! Your parent should praise you for showing tolerance and being a great personality. Think of one way you accepted someone's differences this week.",
          parentAppraisalPrompt: "Did you get a chance to praise your child for showing tolerance?",
      },
  },
  {
      id: 28,
      name: "Courage",
      definition: "Courage is going against fear to do what looks impossible. It is not being weak in your mind when you are trying new things. A courageous person is willing to learn and stands by the truth without shame of what others will say.",
      illustration: "VirtueIllustration_Courage",
      quiz: [
          {
              question: "What is courage?",
              options: ["Being afraid of everything", "Going against fear to do what looks impossible", "Never trying new things", "Worrying about what others say"],
              correctAnswerIndex: 1
          },
          {
              question: "A courageous person...",
              options: ["Is willing to learn and stands by the truth", "Is weak in their mind", "Gives up easily", "Always follows the crowd"],
              correctAnswerIndex: 0
          },
      ],
      activities: [
          {
              type: 'story',
              title: "Model Challenge",
              description: "Your parent can tell a story about a time they modeled courage, maybe at work, in the market, or at home. It could be about standing up for what's right or trying something scary."
          },
          {
              type: 'discussion',
              title: "Work at It Challenge",
              description: "Think of two things that are challenging for you. Now, think of one small way you can start working on one of them today. Courage isn't about not being afraid; it's about trying anyway!"
          },
          {
              type: 'drawing',
              title: "Detective Challenge",
              description: "Watch a cartoon or movie and be a courage detective! Find a character who shows courage. Draw that character being brave and tell your parent what they did."
          }
      ],
      funcise: {
          title: "Detective Challenge",
          description: "Be a courage detective! In your favorite cartoon or movie, find a character who shows courage. What did they do that was brave? Tell your parent all about it!",
          parentAppraisalPrompt: "How well did your child identify an act of courage in a story?",
      },
  }
];