int LED = 2;
int incoming;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  pinMode(LED,OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  if(Serial.available()){
      incoming = Serial.read();
      Serial.println(incoming);
      Serial.println("Received");
      Serial.println("incoming");
      if(incoming == 49){
            digitalWrite(LED,HIGH);
            Serial.println("Led turned on");
         }
      if(incoming == 48){
          digitalWrite(LED,LOW);
          Serial.println("Led turned of");
        }
    }
  delay(20);
}
