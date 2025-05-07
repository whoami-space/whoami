import { goto } from "$app/navigation";
import { page } from "$app/state";
import { get, writable } from "svelte/store";



export async function load() {

    

    return {
    
    // Data do create and navigate between the steps
    on: writable(false),
    result: writable(false),
    goTo: function (link, setter) {
        setter.set(true)
        goto(link)
    },
    // counter variable
    text: "A text",
    counter: writable(0),
    countef: function Counter(select) {

      let counter = "counter";
      counter.set(select.reduce((items, current) => items + current, 0))
      return counter;

    },
    // Selects
    selects: [
        {
          question: "How do you feel",
          options: [
            { value: 1, name: 'Strongly agree' },
            { value: 2, name: 'Agree' },
            { value: 3, name: "I'm not sure" }, 
            { value: 4, name: "Don't agree" },
            { value: 5, name: "Strongly don't agree" },
          ],
          selected: 0,
        },
        {
          question: "You're feeling bad right now",
          options: [
            { value: 1, name: 'Strongly agree' },
            { value: 2, name: 'I Agree' },
            { value: 3, name: "I'm not sure" }, 
            { value: 4, name: "I don't agree" },
            { value: 5, name: "Strongly don't agree" },
          ],
          selected: 0,
        },
        {
          question: "You're feeling bad right now",
          options: [
            { value: 1, name: 'Strongly agree' },
            { value: 2, name: 'I Agree' },
            { value: 3, name: "I'm not sure" }, 
            { value: 4, name: "I don't agree" },
            { value: 5, name: "Strongly don't agree" },
          ],
          selected: 0,
        },
        {
          question: "You're feeling bad right now",
          options: [
            { value: 1, name: 'Strongly agree' },
            { value: 2, name: 'I Agree' },
            { value: 3, name: "I'm not sure" }, 
            { value: 4, name: "I don't agree" },
            { value: 5, name: "Strongly don't agree" },
          ],
          selected: 0,
        },
        {
          question: "You're feeling bad right now",
          options: [
            { value: 1, name: 'Strongly agree' },
            { value: 2, name: 'I Agree' },
            { value: 3, name: "I'm not sure" }, 
            { value: 4, name: "I don't agree" },
            { value: 5, name: "Strongly don't agree" },
          ],
          selected: 0,
        },
    ],

    
    

    };
}