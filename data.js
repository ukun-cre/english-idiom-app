const englishIdioms = {
  stage1: [
    { idiom: 'a lot of', meaning: 'たくさんの', example: 'I have a lot of work to do.' },
    { idiom: 'a few', meaning: 'いくつかの', example: 'I have a few friends in the city.' },
    { idiom: 'a little', meaning: '少しの', example: 'I need a little help with this.' },
    { idiom: 'many of', meaning: '多くの', example: 'Many of my colleagues work late.' },
    { idiom: 'some of', meaning: 'いくつかの', example: 'Some of the items are on sale.' },
    { idiom: 'a cup of', meaning: '一杯の', example: 'Can I have a cup of coffee?' },
    { idiom: 'a glass of', meaning: '一杯の', example: 'She drank a glass of water.' },
    { idiom: 'a piece of', meaning: '一つの', example: 'He gave me a piece of advice.' },
    { idiom: 'a bottle of', meaning: '一瓶の', example: 'I bought a bottle of wine.' }
  ],
  stage2: [
    { idiom: 'over there', meaning: 'あそこに', example: 'The store is over there.' },
    { idiom: 'over here', meaning: 'ここに', example: 'Come over here, please.' },
    { idiom: 'in front of', meaning: 'の前に', example: 'The car is parked in front of my house.' },
    { idiom: 'next to', meaning: 'の隣に', example: 'I sit next to her in class.' },
    { idiom: 'near here', meaning: '近くに', example: 'There is a park near here.' },
    { idiom: 'across from', meaning: 'の向かいに', example: 'The bank is across from the library.' },
    { idiom: 'far from', meaning: 'から遠くに', example: 'My house is far from here.' },
    { idiom: 'far away', meaning: '遠くに', example: 'He lives far away from the city.' },
    { idiom: 'out of', meaning: 'から出て', example: 'She ran out of the room.' }
  ],
  stage3: [
    { idiom: 'in the morning', meaning: '朝に', example: 'I go for a run in the morning.' },
    { idiom: 'in the afternoon', meaning: '午後に', example: 'I have a meeting in the afternoon.' },
    { idiom: 'in the evening', meaning: '夕方に', example: 'We usually eat dinner in the evening.' },
    { idiom: 'at night', meaning: '夜に', example: 'I like to read at night.' },
    { idiom: 'after school', meaning: '学校の後に', example: 'I play soccer after school.' },
    { idiom: 'on weekends', meaning: '週末に', example: 'We go hiking on weekends.' },
    { idiom: 'once a week', meaning: '週に一度', example: 'I visit my grandparents once a week.' },
    { idiom: 'for a long time', meaning: '長い間', example: 'I haven't seen you for a long time.' },
    { idiom: 'all day', meaning: '一日中', example: 'I worked all day yesterday.' }
  ],
  stage4: [
    { idiom: 'for the first time', meaning: '初めて', example: 'I tried sushi for the first time.' },
    { idiom: 'at that time', meaning: 'その時に', example: 'At that time, we didn’t know what to do.' },
    { idiom: 'these days', meaning: '最近', example: 'These days, people use smartphones a lot.' },
    { idiom: 'go to', meaning: 'に行く', example: 'I go to the gym every day.' },
    { idiom: 'come to', meaning: 'に来る', example: 'Come to my party next week.' },
    { idiom: 'go out', meaning: '外出する', example: 'We often go out for dinner.' },
    { idiom: 'go home', meaning: '帰る', example: 'I can’t wait to go home.' },
    { idiom: 'go back', meaning: '戻る', example: 'I will go back to school tomorrow.' },
    { idiom: 'go on a trip', meaning: '旅行に行く', example: 'We will go on a trip next month.' }
  ],
  stage5: [
    { idiom: 'go for a walk', meaning: '散歩に行く', example: 'I like to go for a walk in the park.' },
    { idiom: 'go shopping', meaning: '買い物に行く', example: 'Let’s go shopping this weekend.' },
    { idiom: 'go skiing', meaning: 'スキーに行く', example: 'They go skiing every winter.' },
    { idiom: 'go fishing', meaning: '釣りに行く', example: 'He likes to go fishing on Sundays.' },
    { idiom: 'get up', meaning: '起きる', example: 'I get up early in the morning.' },
    { idiom: 'get to', meaning: 'に着く', example: 'What time do you get to the office?' },
    { idiom: 'arrive at', meaning: 'に到着する', example: 'We will arrive at the station at 3 PM.' },
    { idiom: 'stay at', meaning: 'に宿泊する', example: 'We will stay at a hotel during our trip.' },
    { idiom: 'take a bus', meaning: 'バスに乗る', example: 'I take a bus to work every day.' }
  ],
  stage6: [
    { idiom: 'take a train', meaning: '電車に乗る', example: 'I take a train to visit my family.' },
    { idiom: 'by bus', meaning: 'バスで', example: 'I usually go by bus to school.' },
    { idiom: 'on foot', meaning: '徒歩で', example: 'I prefer to travel on foot.' },
    { idiom: 'be late for', meaning: 'に遅れる', example: 'Don’t be late for the meeting.' },
    { idiom: 'hurry up', meaning: '急ぐ', example: 'Hurry up, we’re going to be late!' },
    { idiom: 'look for', meaning: '探す', example: 'I am looking for my keys.' },
    { idiom: 'look at', meaning: '見る', example: 'Look at the beautiful sunset.' },
    { idiom: 'look forward to', meaning: 'を楽しみにする', example: 'I look forward to the vacation.' },
    { idiom: 'look like', meaning: 'のように見える', example: 'You look like you’re tired.' }
  ],
  stage7: [
    { idiom: 'look after', meaning: '世話をする', example: 'I look after my younger sister.' },
    { idiom: 'take care of', meaning: '面倒を見る', example: 'Please take care of my plants.' },
    { idiom: 'take off', meaning: '離陸する', example: 'The plane will take off soon.' },
    { idiom: 'put on', meaning: '着る', example: 'Please put on your shoes.' },
    { idiom: 'pick up', meaning: '迎えに行く', example: 'I will pick you up at 5 PM.' },
    { idiom: 'give up', meaning: 'あきらめる', example: 'Don’t give up on your dreams.' },
    { idiom: 'be good at', meaning: 'が得意な', example: 'She is good at math.' },
    { idiom: 'be bad at', meaning: 'が苦手な', example: 'I am bad at drawing.' },
    { idiom: 'be interested in', meaning: 'に興味がある', example: 'He is interested in history.' }
  ],
  stage8: [
    { idiom: 'be full of', meaning: 'でいっぱいの', example: 'The box is full of toys.' },
    { idiom: 'be different from', meaning: 'と異なる', example: 'This book is different from that one.' },
    { idiom: 'be afraid of', meaning: 'が怖い', example: 'I am afraid of heights.' },
    { idiom: 'be tired of', meaning: 'に飽きている', example: 'I am tired of this routine.' },
    { idiom: 'be surprised at', meaning: 'に驚く', example: 'I was surprised at the news.' },
    { idiom: 'be proud of', meaning: 'に誇りに思う', example: 'I am proud of my achievements.' },
    { idiom: 'listen to', meaning: 'を聞く', example: 'I listen to music every day.' },
    { idiom: 'talk with', meaning: 'と話す', example: 'I like to talk with my friends.' },
    { idiom: 'speak to', meaning: 'に話す', example: 'Can I speak to the manager?' }
  ],
  stage9: [
    { idiom: 'ask for', meaning: 'を頼む', example: 'Can I ask for a raise?' },
    { idiom: 'write to', meaning: 'に書く', example: 'I will write to you soon.' },
    { idiom: 'wait for', meaning: 'を待つ', example: 'I will wait for your reply.' },
    { idiom: 'thank you for', meaning: 'に感謝する', example: 'Thank you for your help.' },
    { idiom: 'say goodbye', meaning: 'さよならを言う', example: 'It’s hard to say goodbye.' },
    { idiom: 'just a moment', meaning: 'ちょっと待って', example: 'Just a moment, I’ll be right back.' },
    { idiom: 'what kind of', meaning: 'どんな', example: 'What kind of music do you like?' },
    { idiom: 'enjoy ~ing', meaning: 'を楽しむ', example: 'I enjoy reading books.' },
    { idiom: 'finish ~ing', meaning: 'を終わらせる', example: 'Finish doing your homework.' }
  ],
  stage10: [
    { idiom: 'stop ~ing', meaning: 'するのをやめる', example: 'Stop talking during the movie.' },
    { idiom: 'keep ~ing', meaning: 'し続ける', example: 'Keep studying for the test.' },
    { idiom: 'would like to', meaning: 'したい', example: 'I would like to go to the beach.' },
    { idiom: 'want to', meaning: 'したい', example: 'I want to learn a new language.' },
    { idiom: 'hope to', meaning: 'することを望む', example: 'I hope to see you soon.' },
    { idiom: 'have to', meaning: 'しなければならない', example: 'I have to finish my project.' },
    { idiom: 'try to', meaning: 'しようとする', example: 'I will try to help you.' },
    { idiom: 'plan to', meaning: '計画する', example: 'I plan to travel next year.' },
    { idiom: 'decide to', meaning: '決める', example: 'I decided to study abroad.' }
  ],
};

export default englishIdioms;