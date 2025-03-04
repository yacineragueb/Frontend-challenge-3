
export default function Workflow() {
  return (
    <section>
        <div>
            <h2>Supercharge your workflow</h2>
            <p className="description">We’ve got the tools to boost your productivity.</p>
            <div>
                <div>
                    <div>
                        <img src="/public/images/icon-blacklist.svg" alt="blacklist icon" />
                        <h3>Create blacklists</h3>
                        <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-16 lg:flex-row">
                    <img src="/images/logo-google.png" alt="google" />
                    <img src="/images/logo-ibm.png" alt="ibm" />
                    <img src="/images/logo-microsoft.png" alt="microsoft" />
                    <img src="/images/logo-hp.png" alt="hp" />
                    <img src="/images/logo-vector-graphics.png" alt="vector graphics" />
                </div>
            </div>
        </div>
    </section>
  )
}
