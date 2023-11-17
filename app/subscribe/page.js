

export default function LogInHome() {
  return (
    <div className="h-screen bg-white">
        <div className="h-screen flex flex-col items-center justify-evenly">
    <h1 className="text-2xl font-bold">Choose the right plan for you</h1>
    
        <table>
            <tr>
                <td>
                    <div id="mon"  className="bg-blue-900 px-4 py-5 rounded-full">
                        <span className="text-blue-900 px-4 py-3 bg-white rounded-full"><a href="">Monthly</a></span>
                        <span className="text-white px-4 py-3"><a href="">Yearly</a></span>
                    </div>
                </td>
                <td>
                    <div id="mob"  className="bg-white px-10 py-8">
                        <span className="text-white p-8 bg-blue-900 "><a href="">Mobile</a></span>
                    </div>
                </td>
                <td>
                    <div id="bas"  className="bg-white px-10 py-8">
                        <span className="text-white p-8 bg-blue-300 "><a href="">Basic</a></span>
                    </div>
                </td>
                <td>
                    <div id="stan"  className="bg-white px-10 py-8">
                        <span className="text-white p-8 bg-blue-300 "><a href="">Standard</a></span>
                    </div>
                </td>
                <td>
                    <div id="stan"  className="bg-white px-10 py-8">
                        <span className="text-white p-8 bg-blue-300 "><a href="">Premium</a></span>
                    </div>
                </td>
            </tr>
            <tr >
                <td>
                    <h2 className="">Monthly Price</h2>
                    <hr/>
                </td>
                <td>
                    <h2 className="text-center text-blue-900">&#8377; 100</h2>
                    <hr/>
                </td>
                <td>
                    <h2 className="text-center">&#8377; 200</h2>
                    <hr/>
                </td>
                <td>
                    <h2 className="text-center">&#8377; 500</h2>
                    <hr/>
                </td>
                <td>
                    <h2 className="text-center">&#8377; 700</h2>
                    <hr/>
                </td>
            </tr>
            <tr >
                <td>
                    <h2 className="">Video Quality</h2>
                    <hr/>
                </td>
                <td className="text-blue-900">
                    <h2 className="text-center">Good</h2>
                    <hr/>
                </td>
                <td>
                    <h2 className="text-center">Good</h2>
                    <hr/>
                </td>
                <td>
                    <h2 className="text-center">Better</h2>
                    <hr/>
                </td>
                <td>
                    <h2 className="text-center">Best</h2>
                    <hr/>
                </td>
            </tr>
            <tr >
                <td>
                    <h2 className="">Resolution</h2>
                    <hr/>
                </td>
                <td className="text-blue-900">
                    <h2 className="text-center">480p</h2>
                    <hr/>
                </td>
                <td>
                    <h2 className="text-center">480p</h2>
                    <hr/>
                </td>
                <td>
                    <h2 className="text-center">1080p</h2>
                    <hr/>
                </td>
                <td>
                    <h2 className="text-center">4k+HDR</h2>
                    <hr/>
                </td>
            </tr>
            <tr >
                <td>
                    <h2 >Devices you can watch on</h2>
                </td>
                <td className="text-blue-900">
                    <h2 className="text-center">Phone<br/>Tablet</h2>
                </td>
                <td>
                    <h2 className="text-center">Phone<br/>Tablet<br/>Computer<br/>TV</h2>
                </td>
                
                <td>
                    <h2 className="text-center">Phone<br/>Tablet<br/>Computer<br/>TV</h2>
                </td>
                
                <td>
                    <h2 className="text-center">Phone<br/>Tablet<br/>Computer<br/>TV</h2>
                </td>
                
            </tr>
        </table>
        <button className="bg-blue-900 py-3 px-20 text-blue-300 rounded-md">Next</button>
</div>
    </div>
  )
}