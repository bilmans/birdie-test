"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./App.css");
require("./css/table.css");
const moment_1 = require("moment");
const search_1 = require("./search");
function App() {
    const [events, setEvents] = (0, react_1.useState)([]);
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = (0, react_1.useState)(query || '');
    const [filteredEvents, setFilteredEvents] = (0, react_1.useState)([]);
    const [careRecipients, setCareRecipients] = (0, react_1.useState)([]);
    const eventUrl = 'http://localhost:3000/event';
    function getEvents() {
        fetch(eventUrl)
            .then(res => {
            if (!res.ok) {
                throw Error("No access to database");
            }
            return res.json();
        })
            .then((res) => {
            setEvents(res);
            console.log(res);
            return res;
        })
            .then((events) => { filterEvents(events, query); });
    }
    function getCareRecipients() {
        fetch(eventUrl + '/careRecipient')
            .then(res => {
            if (!res.ok) {
                throw Error("No access to database");
            }
            return res.json();
        })
            .then((res) => {
            setCareRecipients(res);
        });
    }
    function isWordInEvent(word, event) {
        for (const key in event) {
            if (typeof event[key] === 'string') {
                const value = event[key].toLowerCase();
                if (value.includes(word)) {
                    return true;
                }
            }
        }
        return false;
    }
    function filterEvents(events, query) {
        if (!query) {
            setFilteredEvents(events);
        }
        else {
            setFilteredEvents(events.filter((event) => {
                const lowerCaseQuery = query.toLowerCase();
                const wordArray = lowerCaseQuery.split(' ');
                const boolArray = [];
                for (const index in wordArray) {
                    boolArray.push(isWordInEvent(wordArray[index], event));
                }
                return boolArray.reduce((previousValue, currentValue) => { return previousValue && currentValue; });
            }));
        }
    }
    function changeTimeFormat(timestamp) {
        const date = new Date(timestamp);
        return (0, moment_1.default)(date).format('YYYY-MM-DD HH:mm');
    }
    function replaceUnderscoreWithSpaces(sentence) {
        const sentenceArray = sentence.split('_');
        return sentenceArray.join(' ');
    }
    (0, react_1.useEffect)(() => {
        getEvents();
        getCareRecipients();
        console.log(filteredEvents);
    }, []);
    function eventDisplay(event) {
        return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: changeTimeFormat(event.timestamp) }, void 0), (0, jsx_runtime_1.jsx)("th", { children: event.event_type }, void 0), (0, jsx_runtime_1.jsx)("th", { children: event.visit_id }, void 0), (0, jsx_runtime_1.jsx)("th", { children: event.care_recipient_id }, void 0), (0, jsx_runtime_1.jsx)("th", { children: event.caregiver_id }, void 0), (0, jsx_runtime_1.jsx)("th", { children: event.payload.note }, void 0)] }, (event.id)));
    }
    function handleSelectChange(e) {
        setSearchQuery(e.target.value);
    }
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { children: "Choose a care recipient:" }, void 0), (0, jsx_runtime_1.jsx)("select", Object.assign({ name: "careRecipient", onChange: handleSelectChange }, { children: careRecipients.map((idObject) => ((0, jsx_runtime_1.jsx)("option", Object.assign({ value: idObject.care_recipient_id }, { children: idObject.care_recipient_id }), void 0))) }), void 0), (0, jsx_runtime_1.jsx)(search_1.default, { searchQuery: searchQuery, setSearchQuery: setSearchQuery }, void 0), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("table", Object.assign({ className: "content-table" }, { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Time" }, void 0), (0, jsx_runtime_1.jsx)("th", { children: "Event Type" }, void 0), (0, jsx_runtime_1.jsx)("th", { children: "Visit" }, void 0), (0, jsx_runtime_1.jsx)("th", { children: "Care Recipient" }, void 0), (0, jsx_runtime_1.jsx)("th", { children: "Caregiver" }, void 0), (0, jsx_runtime_1.jsx)("th", { children: "Notes" }, void 0)] }, void 0) }, void 0), (0, jsx_runtime_1.jsx)("tbody", { children: filteredEvents.map((event) => (eventDisplay(event))) }, void 0)] }), void 0) }, void 0)] }, void 0));
}
exports.default = App;
//# sourceMappingURL=App.js.map