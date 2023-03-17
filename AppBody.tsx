import { FlatList, Image, Linking, ScrollView, StyleSheet, Text, View } from "react-native"
import { ExperienceView } from "./ExperienceView";
import { SocialItem, SocialsView } from "./ContactsView";
import { AppString } from "./constants/AppString";


export const AppBody = () => {
    const socials: Array<SocialItem> = [
        {
            iconName: "map-marker", contact: "Kathmandu, Nepal", onPressed: async () => {
                await Linking.openURL('geo:27.7172, 85.3240?z=12')
            }
        },
        {
            iconName: "envelope", contact: "swastikg11@gmail.com", onPressed: async () => { }
        },
        {
            iconName: "phone", contact: "+977 9841174765", onPressed: async () => {
                await Linking.openURL(`tel:${9841174765}`)
            }
        },
        {
            iconName: "github", contact: "gautamSwostik", onPressed: async () => {
                await Linking.openURL("https://github.com/gautamswostik")
            }
        },
        {
            iconName: "linkedin-square", contact: "Swostik Gautam", onPressed: async () => {
                await Linking.openURL("https://www.linkedin.com/in/swostik-gautam-24a0a5190/")
            }
        },
    ]

    const skills: Array<String> = ["Flutter", "Dart", "Swift", "Typescript", "Javascript", "SwiftUi", "UIKit", "React-Native", "Git", "Firebase"]

    return (<View>
        <ScrollView>
            <View style={styles.viewStyle}>
                <Text style={styles.headerStyle}>{AppString.nameInfo}</Text>
                <Text style={styles.descriptionStyle}>{AppString.nameDescriprition}</Text>
                <Image source={require("./assets/20190105_123807.jpg")} style={styles.imageStyle}></Image>
                <Text style={styles.headerTwoStyle}>Professional Experience</Text>
                <ExperienceView companyName={"F1Soft International Pvt. Ltd"}
                    experienceTime={"06/2022 - Present"}
                    worksDid={[AppString.f1WorkOne, AppString.f1WorkTwo, AppString.f1WorkThree]} />
                <ExperienceView companyName={"Rolling Nexus Pvt. Ltd"}
                    experienceTime={"01/2022 - 06/2022"}
                    worksDid={[AppString.rollingWorkOne, AppString.rollingWorkTwo, AppString.rollingWorkThree]} />
                <ExperienceView companyName={"Yellow Nepal Pvt. Ltd"}
                    experienceTime={"01/2020 - 01/2022"}
                    worksDid={[AppString.yellowNepalWorkOne, AppString.yellowNepalWorkTwo, AppString.yellowNepalWorkThree, AppString.yellowNepalWorkFour]} />
                <Text style={styles.headerTwoStyle}>Skills</Text>

                <FlatList
                    data={skills}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                margin: 4,
                            }}>
                            <Text style={{
                                alignSelf: "center",
                                marginEnd: 10,
                            }}>{"\u2B22"}</Text>
                            <Text style={styles.skillStyle}>{item}</Text>
                        </View>
                    )}
                    numColumns={2}
                    scrollEnabled={false}
                />
            </View>
            <SocialsView socials={socials} />
        </ScrollView>
    </View>)
}

const styles = StyleSheet.create({
    viewStyle: {
        margin: 16,
    },
    headerStyle: {
        fontSize: 42,
        paddingRight: 32,
        paddingVertical: 20,
        fontWeight: "600",
    },
    descriptionStyle: {
        paddingTop: 10,
        fontSize: 16,
        textAlign: "justify"
    },
    imageStyle: {
        marginVertical: 16,
        height: 200,
        width: 200,
        borderRadius: 100,
        alignSelf: "center"
    },
    headerTwoStyle: {
        fontSize: 26,
        paddingVertical: 10,
        fontWeight: "500",
    },
    skillStyle: {
        alignSelf: "center",
        fontSize: 16
    },
});
