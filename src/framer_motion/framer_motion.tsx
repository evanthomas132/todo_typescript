

//Framer motion for animations 

export const todoAnimation = {
    initial: {
        scale: 0
    },
    animate: {
        scale: 1,
        transition: {duration: 0.2, type:"spring", stiffness: 100, damping: 5}
    }
}

export const inputAnimation = {
    initial : {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {duration: 0.5, delay: 1}
    }
}