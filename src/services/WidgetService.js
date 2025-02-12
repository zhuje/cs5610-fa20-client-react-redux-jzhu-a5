// + A5 -- all

// const WIDGET_URL = "http://localhost:8080/api/widgets"
// const TOPIC_URL  = "http://localhost:8080/api/topics"

// A5
// const WIDGET_URL = "https://salty-oasis-03130.herokuapp.com/api/widgets"
// const TOPIC_URL  = "https://salty-oasis-03130.herokuapp.com/api/topics"

// A6 -- HEROKU JAVA SERVER WITH CLEARDB -- configured for MYSQL WORKBENCH
const WIDGET_URL = "https://stormy-earth-30167.herokuapp.com/api/widgets"
const TOPIC_URL  = "https://stormy-earth-30167.herokuapp.com/api/topics"



const findAllWidgets = () =>
  fetch(WIDGET_URL)
    .then(response => response.json())

const findWidgetsForTopic = (topicId) =>
  fetch(`${TOPIC_URL}/${topicId}/widgets`)
    .then(response => response.json())

const createWidgetForTopic = (topicId) =>
  fetch(`${TOPIC_URL}/${topicId}/widgets`, {
    method: "POST",
    body: JSON.stringify({name: "NEW HEADING ", type: "HEADING", text: "NEW TEXT", size: 1 }),
      headers: {
          "content-type": "application/json"
      }
  })
    .then(response => response.json())


export const deleteWidget = (widget) =>
    fetch(`${WIDGET_URL}/${widget.id}`,{
        method: "DELETE"
    })
        // .then(response => response.json())

export const updateWidget = (widgetId, newWidget) =>
    fetch(`${WIDGET_URL}/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(newWidget),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

export const updateWidgetOrder = (newWidgets, topicId) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`, {
        method: "PUT",
        body: JSON.stringify(newWidgets),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())



export default {
  findAllWidgets, createWidgetForTopic, findWidgetsForTopic, deleteWidget,updateWidget, updateWidgetOrder
}
