const Homepage = () => {
    return (
        <>      
        <div style={{ textAlign: 'center' }}>
            <h1>WELCOME TO 'THEE REACT GUIDE'</h1>
            <p>By Muhammad Ahmad Zafar</p>
        </div>
        
        <div style={{margin: 30}}>
            <p>Here's what we will cover:</p>
            <ol>
                <li>React Basics
                    <ul>
                        <li>Components</li>
                        <li>JSX</li>
                        <li>Props</li>
                        <li>State</li>
                        <li>Event Handling</li>
                        <li>Conditional Rendering</li>
                        <li>Lists and Keys</li>
                        <li>Forms</li>
                        <li>Component Lifecycle Methods</li>
                    </ul>
                </li>
                <li>React Intermediate
                    <ul>
                        <li>Function Components</li>
                        <li>Class Components</li>
                        <li>Hooks
                            <ul>
                                <li>useState</li>
                                <li>useEffect</li>
                                <li>useReducer</li>
                                <li>useMemo</li>
                                <li>useCallback</li>
                                <li>useImperativeHandle</li>
                            </ul>
                        </li>
                        <li>Context API</li>
                        <li>Error Boundaries</li>
                        <li>Controlled vs. Uncontrolled Components</li>
                        <li>Fragment</li>
                        <li>Higher-Order Components (HOCs)</li>
                        <li>Render Props</li>
                        <li>Refs</li>
                        <li>Portals</li>
                    </ul>
                </li>
                <li>React Advanced
                    <ul>
                        <li>Custom Hooks</li>
                        <li>Suspense</li>
                        <li>Concurrent Mode</li>
                        <li>React.lazy</li>
                        <li>Code Splitting</li>
                        <li>Server-Side Rendering (SSR)</li>
                        <li>Static Site Generation (SSG)</li>
                        <li>Client-Side Rendering (CSR)</li>
                        <li>Performance Optimization</li>
                        <li>React Router</li>
                        <li>State Management Libraries
                            <ul>
                                <li>Redux</li>
                                <li>MobX</li>
                                <li>Zustand</li>
                                <li>Recoil</li>
                            </ul>
                        </li>
                        <li>Testing Libraries
                            <ul>
                                <li>Jest</li>
                                <li>React Testing Library</li>
                            </ul>
                        </li>
                        <li>TypeScript with React</li>
                        <li>Custom Contexts</li>
                        <li>Integration with Backend Services</li>
                        <li>Advanced Patterns
                            <ul>
                                <li>Compound Components</li>
                                <li>Render Props Patterns</li>
                            </ul>
                        </li>
                        <li>WebSockets</li>
                        <li>GraphQL with React</li>
                        <li>Integration with Third-Party Libraries</li>
                        <li>Progressive Web Apps (PWAs)</li>
                    </ul>
                </li>
            </ol>
        </div>
        </>
    );
};

export default Homepage;
