var people = [].map.call(document.querySelectorAll('#rsvp-list li'), (li, i) => {
    const photo = li.querySelector('.mem-photo-small');


    return {
        photo: photo.style.backgroundImage.replace('url("', '').replace('")', ''),
        profile: photo.href,
        name: li.querySelector('.member-name').innerText.trim().replace('\n', ' '),
        id: i
    };
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

people = people.map(person => {
    const n = getRandomInt(0, getRandomInt(9, 21));
    var possibleFriends = people.map(p => p.id);

    const friends = new Array(n).fill(0).map(() => {
        var i = getRandomInt(0, possibleFriends.length-1);

        return possibleFriends.splice(i, 1)[0];
    });

    return {
        ...person,
        friends,
    }
});

people = people.reduce((last, next) => ({
    ...last,
    [next.id]: next,
}), {});

copy(people);