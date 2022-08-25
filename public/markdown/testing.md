# Mi titulo :D
## chau mundo
### h3

this is an *italic* text

this is an **strong** text

this is an ~~strikethrough~~ text

<!--UL-->
* apple
    * apple 2
* orange
* etc

1. apple
    1. apple2
2. orange
3. etc

[faztweb.com](https://www.faztweb.com "Custom title")

> This is a quote

---
___


`console.log("Hello world")`

```javascript
function ModalPortal({children, closeModal, isOpen}) {
    const handleModalContainerClick = (e) => {
        e.stopPropagation();
    }
 
    return ReactDOM.createPortal(
        <article className={`modal ${isOpen && "isOpen"}`} onClick={closeModal}>
 
            <div className='modal-container' onClick={handleModalContainerClick}>
                <button className='modal-close' onClick={closeModal}>X</button>
                {children}
            </div>  
 
        </article>,
        document.getElementById('modal')
     );
}
```

```python
    print("Hello world");
```

```html
    <h1>Hello World</h1>
```

| Titulo1 | titulo2 | Titulo 3 |
|---------|---------|----------|
| item1   | item2   | item3    |

![sumi](http://pm1.narvii.com/7675/cd51fa8ccd9197e4048c2799a2e9ef2dfcb870e8r1-736-736v2_uhq.jpg "Sumi jeje")

<!--GITHUB MARKDOWN-->

* [x] Task1

* [ ] Task2

* [ ] Task3

:smiley: :relaxed :wink: