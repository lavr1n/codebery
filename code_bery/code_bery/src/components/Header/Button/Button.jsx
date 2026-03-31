import '../Header.css'

export default function HeaderButton({ label, onClick }) {
    return (
        <button className="headerBtn" type="button" onClick={onClick}>{label}</button>
    )
}

