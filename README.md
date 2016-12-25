#An Example Project for Chartlytics

## The Algorithm

Because the length of the output list is shorter than the length of the input list, and because certain elements would be combined, I knew I would have to use a reduce. The `reducer` function thus checks to see if the current item is a `Person`; if it is, it checks if the previous item is also a `Person`. If both the current item and the previous item are `Person`s, it adds the name of the current person to the previous item and replaces its Order value. Sadly, idiomatic JavaScript makes it far more convenient to use mutators like `Array.prototype.push` (`line 41`) and to reassign values with the assignment operator (`line 42`).

Because Object assignment happens by reference in JavaScript, `let newResults = results` (`line 36`) doesn't actually improve this mutability situation, but it does help make it clear what's going on.

If the current item is a `Person` but the previous item is not, the current item is reformatted to appear like an output-list-styled item. If the current item is not a `Person`, it is merely appended to the end of the list, and the list is finally returned.

This reducer is then applied to the input list, after it has been sorted by Order.

## The Template

Rather than use React, the infrastructure for which would have been very heavy for a project this small, or a Handlebars-style template engine, I decided to experiment with the [pure.js](https://beebole.com/pure/) library. Although older (2008), I had never used it before. It uses unaugmented HTML, which it then uses CSS Selectors to transform - a technique I had discovered through the [Enlive library for Clojure](https://github.com/cgrand/enlive). Although not quite as elegant as that library, pure.js was a very simple system to use, and the separation of concerns is desirable.

## In Conclusion

Thank you very much for giving me the opportunity to work on this project and give you a closer look at my coding style and philosophy.I hope you will be pleased with what I have written. Thank you for your time!

Cheers,

C. Warren Dale
