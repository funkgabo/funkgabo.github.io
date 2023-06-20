import React from "react";
import Skeleton from "react-loading-skeleton";
import { SkeletonContainer, SkeletonBars } from './style'

export const DegreeCardSkeleton = ({ cards }) => {
    return (
        Array(cards).fill(0).map((_, i) => (
            <SkeletonContainer key={i}>
                <div>
                    <Skeleton circle width={40} height={40} />
                </div>
                <SkeletonBars>
                    <Skeleton count={5} />
                </SkeletonBars>
            </SkeletonContainer>
        ))

    );
}
