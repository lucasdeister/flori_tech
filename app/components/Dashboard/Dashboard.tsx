import React from 'react'
import Interacoes from './Interacoes/Interacoes'
import Card from './Card/Card'
import Percentual from './Percentual/Percentual'
import Peso from './Peso/Peso'
import Video from './Video/Video'

interface DashboardProps {
    isMobile: boolean;
}

function Dashboard( { isMobile }: DashboardProps) {

    if (isMobile === undefined) return null;

    return (
        <div>
            <h1 className='text-3xl font-bold'>Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 flex-wrap auto-fit autofill">
                <Card>
                    <Interacoes />
                </Card>
                <Card>
                    <Percentual isMobile={isMobile}/>
                </Card>
                <Card>
                    <Peso />
                </Card>
                <Card>
                    <Video src="/videos/videoplayback.mp4" title="Vídeo" />
                </Card>
            </div>
        </div>
    )
}

export default Dashboard
