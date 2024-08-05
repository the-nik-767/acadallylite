import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import { icons } from '../../assets';
import { color, fontFamily, fontSize, responsiveWidth } from '../../constant/theme';
import { Header } from '../../components';

const Home = () => {
  return (
    <View style={styles.container}>
     
 <Header title={"About Us"} showBack={true} />
     

      <View style={styles.task}>
        <View style={styles.taskHeader}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9uV0x81gF0j6jK7O4Y-r89-y2D-K-w2j6gI8q8Q&usqp=CAU',
            }}
            style={styles.taskHeaderImage}
          />
          <Text style={styles.taskHeaderTitle}>Getting to know plants</Text>
          <Text style={styles.taskHeaderDate}>Due Date 29-07-2024</Text>
        </View>

        <View style={styles.progressBar}>
          <View style={styles.progressBarCompleted} />
          <View style={styles.progressBarRemaining} />
        </View>

        <View style={styles.progressCounter}>
          <Text style={styles.progressCounterText}>
            11 Activities Completed
          </Text>
          <Text style={styles.progressCounterText}>12 Activities</Text>
        </View>
      </View>

      <View style={styles.course}>
        <Text style={styles.courseTitle}>Types of plants</Text>

        <View style={styles.courseContent}>
          <View style={styles.courseNode}>
            <View style={styles.courseNodeImage}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6OqX_C6rWjL7Xj09G5j4K2f97i50V8mJ-r5W8YQ&usqp=CAU',
                }}
                style={styles.courseNodeImage}
              />
            </View>
            <View style={styles.courseNodeLine} />
          </View>
          <View style={styles.courseNode}>
            <View style={styles.courseNodeLine} />
            <View style={styles.courseNodeImage}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK1wG44tW39qW805I3q3_O11wO8D1n5C398sT5wQ&usqp=CAU',
                }}
                style={styles.courseNodeImage}
              />
            </View>
          </View>
          <View style={styles.courseNode}>
            <View style={styles.courseNodeLine} />
            <View style={styles.courseNodeImage}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1xZ5kLqP29yQ2yR92rT6b90c03V6o2n19G4H_8w&usqp=CAU',
                }}
                style={styles.courseNodeImage}
              />
            </View>
          </View>
          <View style={styles.courseNode}>
            <View style={styles.courseNodeLine} />
            <View style={styles.courseNodeImage}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ27N5rYvX5_k4R7D_h3F12g3gV97jH78Q-7X9H3eA&usqp=CAU',
                }}
                style={styles.courseNodeImage}
              />
            </View>
          </View>
          <View style={styles.courseNode}>
            <View style={styles.courseNodeLine} />
            <View style={styles.courseNodeImage}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6OqX_C6rWjL7Xj09G5j4K2f97i50V8mJ-r5W8YQ&usqp=CAU',
                }}
                style={styles.courseNodeImage}
              />
            </View>
          </View>
          <View style={styles.courseNode}>
            <View style={styles.courseNodeLine} />
            <View style={styles.courseNodeImage}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ27N5rYvX5_k4R7D_h3F12g3gV97jH78Q-7X9H3eA&usqp=CAU',
                }}
                style={styles.courseNodeImage}
              />
            </View>
          </View>
          <View style={styles.courseNode}>
            <View style={styles.courseNodeLine} />
            <View style={styles.courseNodeImage}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1xZ5kLqP29yQ2yR92rT6b90c03V6o2n19G4H_8w&usqp=CAU',
                }}
                style={styles.courseNodeImage}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ27N5rYvX5_k4R7D_h3F12g3gV97jH78Q-7X9H3eA&usqp=CAU',
            }}
            style={styles.footerButtonImage}
          />
          <Text style={styles.footerButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ27N5rYvX5_k4R7D_h3F12g3gV97jH78Q-7X9H3eA&usqp=CAU',
            }}
            style={styles.footerButtonImage}
          />
          <Text style={styles.footerButtonText}>Subjects</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ27N5rYvX5_k4R7D_h3F12g3gV97jH78Q-7X9H3eA&usqp=CAU',
            }}
            style={styles.footerButtonImage}
          />
          <Text style={styles.footerButtonText}>Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ27N5rYvX5_k4R7D_h3F12g3gV97jH78Q-7X9H3eA&usqp=CAU',
            }}
            style={styles.footerButtonImage}
          />
          <Text style={styles.footerButtonText}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: color.green,
    paddingTop: responsiveWidth('20'),
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    fontSize: fontSize.medium,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileDesc: {
    color: '#fff',
    fontSize: fontSize.regular,
    fontWeight: '300',
  },
  notification: {
    padding: 8,
  },
  notificationImage: {
    width: 24,
    height: 24,
  },
  subjects: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#fff',
  },
  subject: {
    alignItems: 'center',
  },
  subjectImage: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  subjectText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  task: {
    backgroundColor: '#fff',
    padding: 16,
  },
  taskHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  taskHeaderImage: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  taskHeaderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskHeaderDate: {
    fontSize: 14,
    color: '#888',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
    marginBottom: 8,
  },
  progressBarCompleted: {
    height: 8,
    backgroundColor: '#4CAF50',
    borderRadius: 4,
    width: '75%', // Adjust this value as needed
  },
  progressBarRemaining: {
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
    width: '25%', // Adjust this value as needed
  },
  progressCounter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  progressCounterText: {
    fontSize: 14,
    color: '#888',
  },
  course: {
    backgroundColor: '#fff',
    padding: 16,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  courseContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  courseNode: {
    alignItems: 'center',
    marginRight: 16,
  },
  courseNodeImage: {
    width: 40,
    height: 40,
  },
  courseNodeLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#eee',
    marginTop: 8,
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonImage: {
    width: 24,
    height: 24,
    marginBottom: 8,
  },
  footerButtonText: {
    fontSize: 14,
  },
});

export default Home;
