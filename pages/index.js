import Link from 'next/link'

function HomePage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="mt-4">Hello world!</h1>
                    <p>This is Bootstrap 5 Beta + NextJS</p>
                    <button className="btn btn-primary me-2">Read the docs!</button>
                    <button className="btn btn-outline-secondary">or just get started</button>
                    <Link href="/about" className="btn btn-outline-secondary">or just get started</Link>
                    <Link href="/table" className="btn btn-outline-secondary">table</Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage
