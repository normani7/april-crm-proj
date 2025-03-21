import { Button } from "primereact/button";
import { useEffect, useState } from "react"

export default function MainPage() {
    // Состояние в react - это объект который сдержит некие переменные,
    // влияющие на рендеринг компонента. Когда состояние меняется,
    // React автоматически перерисовывает компонент или по 
    // другому ре-рендерит. 

    // Хуки - это функции, которые позволяют вам «подцепиться» к состоянию 
    // и методам жизненного цикла React из функционального компонента.

    // useState - это хук в react который позволяет добавлять состояние
    // в компонентах.

    // Жизненный цикл компоненты - это последоваетельность этапов, 
    // через которые проходит компонента React от его 
    // создания ( монтирования ) до его удаления ( размонтирования ) из DOM.

    // Этапы жизненного цикла компоненты: 
    // 1. Mounting ( монтирование )
    // 2. Updating ( обновление )
    // 3. Unmounting ( размонтирование )

    // useEffect - это хук в react который позволяет выполнять
    // побочные эффекты в функциональных компонентах.

    const [value, setValue] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('обновление компонента прошла');
    }, [])

    return (
        <div>
            <p>
                <b>{ value === 0 ?
                    'Минимальное допустимое значение' : value 
                 }</b>
            </p>

            <div>
                <Button
                    label="Click for -" 
                    onClick={() => {
                        if (value > 0) {
                            setValue(value - 1)
                        }
                    }}
                />
                <Button
                    label="CLick for +" 
                    onClick={() => setValue(value + 1)}
                />
            </div>
            <h1>Main Page</h1>
            <p>
                <b>{ count === 0 ?
                    'Минимальное допустимое значение' : count 
                 }</b>
            </p>

            <div>
                <Button
                    label="Click count for -" 
                    onClick={() => {
                        if (count > 0) {
                            setCount(count - 1)
                        }
                    }}
                />
                <Button
                    label="CLick count for +" 
                    onClick={() => setCount(count + 1)}
                />
            </div>
        </div>
    )
}