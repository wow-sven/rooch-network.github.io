# 流式支付（Streaming Payment）

状态通道中的交易只需要交易双方确认，所以它的理论上的吞吐量只受限于两个节点之间的网络连接，所以使得流式支付或者微支付成为可能。

我们使用付费的互联网服务时，给服务方付费的周期越长，越依赖对服务方的信任，面临的欺诈风险也越大。如果我们将付费粒度拆分的足够小，比如下载文件按每字节付费，或者 RPC 服务按每次请求服务，用户承担的风险则足够小。

而这种频次的付费，传统的支付方式是无法实现的，只有通过状态通道模式才能实现。并且这种付费方式，真正实现了按需付费，我们认为未来的应用和服务应该都是按需付费的。


:::note

TODO 本文档需要完善

:::