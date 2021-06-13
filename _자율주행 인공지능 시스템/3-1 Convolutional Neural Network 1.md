## <span style="color:#DD4124">Convolutional Neural Network </spen>

- MLP(Multi Layer Perceptron)
- CNN(Convolutional Neural Network)
- ResNet의 구조아 동작 원리
- Residual Block

<hr >
<br >

### MLP에 대한 설명

여러 개의 레이어로 구성되어 있는 Fully Connected Layer

모든 뉴런과 뉴런이 이웃하는 레이어 간에 연결되어 있음

### MLP의 한계점

입력이 1차원 벡터로 구현되어 있음

처리하는 이미지로부터 어떤 개체를 인식하는데 성능이 많이 떨어짐

2차원 평면에서 1차원으로 전환(Reshape) : 공간정보가 손실되기 때문에 이미지 처리에 부적합

모든 가중치 학습을 통해 최적의 값 도출 시 불필요한 가중치까지 포함되어 많은 계산 시간 소모

층이 깊어질 수록 다수 개의 층이 존재할수록 계산량 폭발적 증가로 학습 시간 함께 증가

Overfitting의 문제 발생 : 신경망이 학습 데이터셋에 과도하게 적합되는 문제(과적합)

<hr >
<br >

### CNN

입력되는 이미지를 Reshaping하지 않고 이미지 자체 내에서 단순한 형태의 패턴을 탐지하는 __필터__ 사용

여기서 사용된 필터, 입력되는 2차원 정보와 필터 간의 매칭(상관)을 수행하여 단순한 부분 인지.

여러 번 인지하면 나중에는 굉장히 복잡한 패턴을 인지한다는 원리

다수의 Convolutioncal Layer들이 순차적으로 연결되어 있는 구성


### ResNet

2015년 Kaiming He가 개발한 기술

인공지능 신경망

인간의 능력을 상회하는 첫 번째 신경망

최근까지도 개발된 많은 신경망의 Backbone으로 사용

### ResNet 구조 및 동작 원리

1,000개의 클래스를 높은 정확도로 분류하는 CNN

input Image는 ImageNet 칼라 이미지 크기인 224x224x3

Residual Connection 및 Bottleneck 구조로 층이 깊어지면서도 성능을 향상

Batch Normalization(Feature 데이터의 정규화)로 성능 향상

