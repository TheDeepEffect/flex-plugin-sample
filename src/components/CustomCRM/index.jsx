import { useEffect, useState } from "react";

export default function CustomCRM(props) {
    const { task, manager } = props;
    const [loading, setLoading] = useState(true);
    const [locationData, setLocationData] = useState(null);
    /**
     * This function fetches the preEngagementData from a conversation user initiates from webchat application.
     * preEngagementData will include the geoLocationData key which inclides data about user who initiated conversation.
     */
    const fetchLocationData = async () => {
        try {
            const data = await manager.chatClient.getChannelBySid(task?.attributes?.conversationSid);
            setLocationData(data?.attributes?.pre_engagement_data?.geoLocationData)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (task?.attributes?.conversationSid) {
            fetchLocationData()
        }
    }, [task?.attributes?.conversationSid])

    return task ? loading ? <>Loading...</> : <div className="locatio-wrapper">
        <ul>
            <li> City:{locationData?.city}</li>
            <li> Country: {locationData?.country}</li>
            <li>Zip: {locationData?.zip}</li>
            <li> lat: {locationData?.lat}</li>
            <li>lon: {locationData?.lon}</li>
        </ul>
    </div> : <div>Location details will appear here</div>
}