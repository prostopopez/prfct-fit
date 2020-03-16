let store = null;

const getMainData = async () => {
    if (store === null) {
        store = fetch("http://dev-test-black.ru/testTask/data.json").then(data => data.json());
    }

    return store
};

const getCards = async () => {
    const { cards } = await getMainData();

    return cards
};

const getUserData = async () => {
    const { userData } = await getMainData();

    return userData;
};

export { getCards, getUserData }