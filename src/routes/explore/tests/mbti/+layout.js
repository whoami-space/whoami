import { goto } from "$app/navigation";
import { page } from "$app/state";
import { writable } from "svelte/store";


export function load() { 
    return {
    // Elements for counting
      counter: 0,
    // Data do create and navigate between the steps
      stepOne: writable(false),
      stepTwo: writable(false),
      stepThree: writable(false),
      stepFour: writable(false),
      result: writable(false),
      goTo: function (link, setter) {
        setter.set(true)
        goto(link)
      },
    // Other data

    

    };
}