let messages = [];

const resolvers = {
    messages: () => {
        return messages;
    },
    sendMessage: ({nickname, message}) => {
        messages.push(`${nickname}: ${message}`);
        return true;
    },
};

module.exports = resolvers;
